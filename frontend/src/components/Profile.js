import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

const Profile = () => {
  return (
    <div className="w-[50%] border-l border-r border-gray-200">
      <div>
        <div className="flex items-center py-2">
          <Link to="/" className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <IoMdArrowRoundBack size={"20px"}/>
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">Patel</h1>
            <p className="text-gray-600 text-sm">10 Posts</p>
          </div>
        </div>
        <img
          src="https://pbs.twimg.com/profile_banners/973770115442446338/1707460366/1080x360"
          alt="banner"
        />
        <div className="absolute border-4 ml-2 border-white rounded-full top-52">
        <Avatar src="https://4kwallpapers.com/images/wallpapers/lisa-blackpink-thai-singer-asian-girl-k-pop-singer-2048x2048-3232.jpg" size="120" round={true} />
        </div>
        <div className="text-right m-4">
          <button className="px-4 py-1 rounded-full  border-2 border-gray-300 hover:bg-gray-200 ">Edit Profile</button>
        </div>
        <div className="m-4">
          <h1 className="font-bold text-xl">Patel</h1>
          <p className="text-sm text-gray-500">@mernstackpatel</p>
        </div>
        <div className=" m-4">
          <p>Sharing about AI, business, and productivity. Ready to work together on launching AI products? DM for paid collabs</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
