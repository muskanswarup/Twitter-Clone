import React from "react";
import { IoMdSearch } from "react-icons/io";
import Avatar from "react-avatar";

const RightSideBar = () => {
  return (
    <div className="w-[25%]">
      <div className="flex items-center p-2 bg-gray-200 rounded-full outline-none w-full">
        <IoMdSearch size={"20px"} />
        <input
          type="text"
          className="bg-transparent px-2 outline-none"
          placeholder="Search"
        />
      </div>

      <div className="p-4 bg-gray-100 rounded-sm my-4">
        <h1 className="font-bold text-lg">Who to Follow</h1>
        <div className="flex items-center justify-between my-3">
          <div className="flex">
            <div>
              <Avatar
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                size="40"
                round={true}
              />
            </div>

            <div className="ml-2">
              <h1 className="font-bold">Patel</h1>
              <p className="text-sm">@patelmernstack</p>
            </div>
            <div>
            <button className="px-4 py-1 bg-black text-white rounded-full">Follow</button>
            </div>
          </div>
          
        </div>

        <div className="flex items-center justify-between my-3">
          <div className="flex">
            <div>
              <Avatar
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                size="40"
                round={true}
              />
            </div>

            <div className="ml-2">
              <h1 className="font-bold">Patel</h1>
              <p className="text-sm">@patelmernstack</p>
            </div>
            <div>
            <button className="px-4 py-1 bg-black text-white rounded-full">Follow</button>
            </div>
          </div>
          
        </div>

        <div className="flex items-center justify-between my-3">
          <div className="flex">
            <div>
              <Avatar
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                size="40"
                round={true}
              />
            </div>

            <div className="ml-2">
              <h1 className="font-bold">Patel</h1>
              <p className="text-sm">@patelmernstack</p>
            </div>
            <div>
            <button className="px-4 py-1 bg-black text-white rounded-full">Follow</button>
            </div>
          </div>
          
        </div>

        <div className="flex items-center justify-between my-3">
          <div className="flex">
            <div>
              <Avatar
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                size="40"
                round={true}
              />
            </div>

            <div className="ml-2">
              <h1 className="font-bold">Patel</h1>
              <p className="text-sm">@patelmernstack</p>
            </div>
            <div>
            <button className="px-4 py-1 bg-black text-white rounded-full">Follow</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
