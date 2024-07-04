import React from "react";
import { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { getUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(name, username, email, password);

    if (isLogin) {
      // Login
      try {
        const res = await axios.post(`${USER_API_END_POINT}/login`, {
          email,
          password,
        } , {
          headers:{
            'Content-Type':"application/json"
          },
          withCredentials: true
        });

        dispatch(getUser(res?.data?.user));
        if(res.data.success){
          navigate("/");
          toast.success(res.data.message);
        }

      } catch (error) {
        toast.success(error.response.data.message);
        console.log(error);
      }
    } else {
      // Sign Up
      try {
        const res = await axios.post(`${USER_API_END_POINT}/register`, {
          name,
          username,
          email,
          password,
        }, {
          headers:{
            'Content-Type': "application/json"
          },
          withCredentials: true
        });
        if(res.data.success){
          setIsLogin(true);
          toast.success(res.data.message);
        }

      } catch (error) {
        toast.success(error.response.data.message);
        console.log(error);
      }
    }
  };

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[80%]">
        <div>
          <img
            width={"600px"}
            src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Log%D0%BE.png"
            alt="twitter-logo"
            className="ml-4"
          />
        </div>
        <div className="">
          <div className="my-5">
            <h1 className="text-6xl font-bold">Happening now.</h1>
          </div>
          <h1 className="mt-4 mb-2 text-xl font-bold">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
          <form onSubmit={submitHandler} className="flex flex-col w-[70%]">
            {!isLogin && (
              <>
                <input
                  type="text"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  className="outline-blue-500 border border-gray-600 px-4 py-2 rounded-full my-1"
                />
                <input
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="outline-blue-500 border border-gray-600 px-4 py-2 rounded-full my-1"
                />
              </>
            )}

            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="outline-blue-500 border border-gray-600 px-4 py-2 rounded-full my-1"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-blue-500 border border-gray-600 px-4 py-2 rounded-full my-1"
            />
            <button className="bg-[#1D9BF0] border-none py-2 rounded-full text-lg text-white my-4">
              {isLogin ? "Login" : "Create Account"}
            </button>

            <h1>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <span
                className="text-[#1D9BF0] hover:cursor-pointer font-bold"
                onClick={loginSignupHandler}
              >
                {isLogin ? " Register" : " Login"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
