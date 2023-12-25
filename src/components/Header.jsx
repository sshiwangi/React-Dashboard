import React from "react";
import { FaSearch } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import { FaRegBell } from "react-icons/fa6";

function Header() {
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center">
      <div className="relative">
        <FaSearch className="absolute top-1/2 -translate-y-1/2 left-3" />
        <input
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] px-4 pl-8"
          type="text"
          placeholder="Search something"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <FaRegBell />
        <GrFormNextLink />
      </div>
    </div>
  );
}

export default Header;
