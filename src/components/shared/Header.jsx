import React from "react";
import { FaSearch } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import { FaRegBell } from "react-icons/fa6";
import { CgMenuLeft } from "react-icons/cg";
import loginIcon from "../../assets/images/Login.png";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

function Header({ isSidebarOpen, toggleSidebar }) {
  return (
    <div className={` ${isSidebarOpen ? "z-30" : ""} w-full`}>
      <div>
        <div className="p-4 flex justify-between items-center">
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
            <div>
              <img src={loginIcon} className="h-[24px]" alt="" />
              {/* <Transition
              show={true}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            ></Transition> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
