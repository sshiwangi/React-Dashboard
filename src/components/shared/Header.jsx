import React from "react";
import { FaSearch } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import { FaRegBell } from "react-icons/fa6";
import { CgMenuLeft } from "react-icons/cg";
import loginIcon from "../../assets/images/Login.png";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Input from "../UIElements/Input";

function Header({ isSidebarOpen, toggleSidebar }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set the isScrolled state based on the scroll position
      setIsScrolled(window.scrollY > 0);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` ${isSidebarOpen ? "z-30" : ""} ${
        isScrolled ? "shadow-md" : ""
      } w-full sticky top-0 bg-mainbg`}
    >
      <div className="">
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
              <Input
                style="text-sm bg-mainbg focus:outline-none active:outline-none h-10 w-[16rem] sm:w-[24rem] px-4 pl-12"
                type="text"
                placeholder="Search something..."
              />
            </div>
          </div>
          <div className="flex items-center gap-4 mr-2">
            <FaRegBell size={20} />
            <div>
              <img src={loginIcon} className="h-[24px]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
