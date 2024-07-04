import React from "react";
import Avatar from "react-avatar";
import { FaComment, FaHeart, FaBookmark } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getRefresh } from "../redux/tweetSlice";

const Tweet = ({ tweet }) => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const deleteTweetHandler = async (id) => {
    try{
      axios.defaults.withCredentials = true;
      const res = await axios.delete(`${TWEET_API_END_POINT}/delete/${id}`)
      console.log(res);
      dispatch(getRefresh());
      toast.success(res.data.message);

    }catch(error){
      toast.success(error.response.data.message);
      console.log(error);
    }
  }

  const likeOrDislikeHandler = async (id) => {
    try {
      const res = await axios.put(
        `${TWEET_API_END_POINT}/like/${id}`,
        { id: user?._id },
        {
          withCredentials: true,
        }
      );

      dispatch(getRefresh());
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);

      console.log(error);
    }
  };

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
              <h1 className="font-bold ">{tweet?.userDetails[0]?.name}</h1>
              <p className="text-gray-500 text-sm ml-1">{`@${tweet?.userDetails[0]?.username} .1m`}</p>
            </div>

            <div>
              <p>{tweet?.description}</p>
            </div>

            <div className="flex justify-between my-3">
              <div className="flex items-center">
                <div className="p-2 cursor-pointer hover:bg-yellow-100 rounded-full">
                  <FaComment />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div
                  onClick={() => likeOrDislikeHandler(tweet?._id)}
                  className="p-2 cursor-pointer hover:bg-pink-200 rounded-full"
                >
                  <FaHeart />
                </div>
                <p>{tweet?.like?.length}</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 cursor-pointer hover:bg-teal-100 rounded-full">
                  <FaBookmark />
                </div>
                <p>0</p>
              </div>

              {user?._id === tweet?.userId && (
                <div onClick={() => deleteTweetHandler(tweet?._id)} className="flex items-center">
                  <div className="p-2 cursor-pointer hover:bg-red-200 rounded-full">
                    <MdDelete size={"24px"} />
                  </div>
                  <p>0</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
