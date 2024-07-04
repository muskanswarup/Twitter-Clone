import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaBookmark, FaSlackHash } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import axios from "axios";
import {USER_API_END_POINT} from "../utils/constant";
import toast from "react-hot-toast";
import { getMyProfile, getOtherUsers, getUser } from "../redux/userSlice";


const LeftSideBar = () => {
  const {user} = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try{
      const res = await axios.get(`${USER_API_END_POINT}/logout`);
      dispatch(getUser(null));
      dispatch(getOtherUsers(null));
      dispatch(getMyProfile(null));
      navigate('/login');
      toast.success(res.data.message);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="w-[20%]">
      <div>
        <div>
          <img
            width={"35px"}
            src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Log%D0%BE.png"
            alt="twitter-logo"
            className="ml-4"
          />
        </div>
        <div className="my-4">
          <Link to="/" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <IoMdHome  size={"24px"}/>
            </div>
            <h1 className="font-bold ml-2">Home</h1>
          </Link>

            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <FaSlackHash    size={"24px"}/>
            </div>
            <h1 className="font-bold ml-2">Explore</h1>
          </div>

            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <IoMdNotifications  size={"24px"}/>
            </div>
            <h1 className="font-bold ml-2">Notifications</h1>
          </div>

            <Link to={`/profile/${user?._id}`} className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <FaUser  size={"20px"}/>
            </div>
            <h1 className="font-bold ml-2">Profile</h1>
          </Link>

            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <FaBookmark  size={"20px"}/>
            </div>
            <h1 className="font-bold ml-2">Bookmarks</h1>
          </div>     

          <div onClick={logoutHandler} className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <IoLogOut  size={"24px"}/>
            </div>
            <h1 className="font-bold ml-2">Logout</h1>
          </div>

          <button className="px-4 py-2 border-none text-md rounded-full w-full text-white font-bold bg-[#1D9BF0]">Post</button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
