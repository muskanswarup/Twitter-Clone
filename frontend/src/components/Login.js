import React from "react";
import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  }

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
          <h1 className="mt-4 mb-2 text-xl font-bold">{isLogin ? "Login" : "Sign Up"}</h1>
          <form className="flex flex-col w-[70%]">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  className="outline-blue-500 border border-gray-600 px-4 py-2 rounded-full my-1"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="outline-blue-500 border border-gray-600 px-4 py-2 rounded-full my-1"
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email"
              className="outline-blue-500 border border-gray-600 px-4 py-2 rounded-full my-1"
            />
            <input
              type="password"
              placeholder="Password"
              className="outline-blue-500 border border-gray-600 px-4 py-2 rounded-full my-1"
            />
            <button className="bg-[#1D9BF0] border-none py-2 rounded-full text-lg text-white my-4" >
            {isLogin ? "Login" : "Create Account"}
            </button>

            <h1>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <span className="text-[#1D9BF0] hover:cursor-pointer font-bold" onClick={loginSignupHandler}>{isLogin ? " Register" : " Login"}</span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
