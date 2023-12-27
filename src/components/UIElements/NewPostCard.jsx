import React from "react";
import { CiImageOn } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { IoDocumentAttachOutline } from "react-icons/io5";

function NewPostCard() {
  return (
    <div className="rounded-sm shadow-md border border-stroke bg-white py-6 px-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex gap-4 flex-col">
        <h2 className="text-lg font-bold">Create New Post</h2>
        <textarea
          className="bg-neutral-300 rounded-md"
          cols="30"
          rows="2"
        ></textarea>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <CiImageOn size={28} />
            <CiVideoOn size={28} />
            <IoDocumentAttachOutline size={28} />
          </div>
          <button className="bg-blue-500 p-3 rounded-md text-white font-md">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPostCard;
