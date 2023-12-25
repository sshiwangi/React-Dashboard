import React from "react";
import { FaSearch } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import { FaRegBell } from "react-icons/fa6";
import { CgMenuLeft } from "react-icons/cg";
import loginIcon from "../assets/images/Login.png";

function Header({ isSidebarOpen, toggleSidebar }) {
  return (
    <div className={` ${isSidebarOpen ? "z-30" : ""}`}>
      <div className="p-4 flex flex-grow justify-between items-center">
        <div className="flex items-center gap-4">
          {!isSidebarOpen && (
            <CgMenuLeft
              size={24}
              className="z-999 sm:hidden"
              onClick={toggleSidebar}
            />
          )}

          <div className="relative">
            <FaSearch className="absolute top-1/2 -translate-y-1/2 left-3" />
            <input
              className=" text-sm bg-mainbg focus:outline-none active:outline-none h-10 w-[16rem] sm:w-[24rem] px-4 pl-12"
              type="text"
              placeholder="Search something..."
            />
          </div>
        </div>
        <div className="flex items-center gap-4 mr-2">
          <FaRegBell size={20} />
          <img src={loginIcon} className="h-[24px]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
