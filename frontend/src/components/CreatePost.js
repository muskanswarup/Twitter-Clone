import React from "react";
import Avatar from 'react-avatar';
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="w-[100%] ">
      <div >
        <div className="flex items-center justify-evenly border-b border-gray-200">
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-2">
            <h1 className="text-gray-600 font-semibold text-lg ">For you</h1>
          </div>
          <div className="cursor-pointer  hover:bg-gray-200 w-full text-center px-4 py-2">
            <h1 className="text-gray-600 font-semibold text-lg ">Following</h1>
          </div>
        </div>
        <div>
            <div className="flex items-center p-4">
                <div>
                <Avatar src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" size="40" round={true} />
                </div>
                <input className="ml-2 w-full outline-none border-none text-xl" type="text" placeholder="What is happening?!"/>
            </div>
            <div className="flex items-center justify-between p-4 border-b border-gray-300">
                <div>
                    <CiImageOn size={"20px"}/>
                </div>
                <button className="bg-[#1D9BF0] px-4 py-1 border-none rounded-full text-white text-lg text-right"> 
                    Post
                </button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default CreatePost;
