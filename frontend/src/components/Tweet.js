import React from "react";
import Avatar from "react-avatar";
import { FaComment, FaHeart, FaBookmark } from "react-icons/fa";

const Tweet = () => {
  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex p-4">
          <Avatar
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            size="40"
            round={true}
          />
          <div className=" ml-2 w-full"> 
            <div className="flex items-center">
              <h1 className="font-bold ">Patel</h1>
              <p className="text-gray-500 text-sm ml-1">@patelmernstack . 1m</p>
            </div>

            <div>
                <p>Hello developers! Let's connect and grow together.</p>
            </div>

            <div className="flex justify-between my-3">
                <div className="flex items-center">
                    <div className="p-2 cursor-pointer hover:bg-gray-300 rounded-full">
                    <FaComment/>
                    </div>
                    <p >0</p>
                </div>
                <div className="flex items-center">
                    <div className="p-2 cursor-pointer hover:bg-gray-300 rounded-full">
                    <FaHeart/>
                    </div>
                    <p >0</p>
                </div>
                <div className="flex items-center">
                    <div className="p-2 cursor-pointer hover:bg-gray-300 rounded-full">
                    <FaBookmark/>
                    </div>
                    <p >0</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
