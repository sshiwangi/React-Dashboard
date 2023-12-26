import React from "react";
import { FcLike } from "react-icons/fc";
import { FaCommentDots } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

function PostCard({ icon, name, time, content }) {
  return (
    <div className="rounded-sm shadow-md border border-stroke bg-white py-6 px-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex gap-2 flex-col h-11.5 w-11.5 rounded-full bg-meta-2 dark:bg-meta-4">
        <div className="flex">
          <div className="mr-3">
            <img src={icon} alt="img" className="h-[32px]" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-md">{name}</h3>
            <p>{time}</p>
          </div>
        </div>
        <div>{content}</div>
        <div className="flex gap-3">
          <FcLike />
          <FaCommentDots />
          <FaShareAlt />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
