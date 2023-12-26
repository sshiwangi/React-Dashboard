import React, { useState, useEffect } from "react";
import { GrTechnology } from "react-icons/gr";
import { Sidebar_Links } from "../../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FcBusinesswoman } from "react-icons/fc";
import profileIcon from "../../assets/images/profile icon.png";
import techHazelIcon from "../../assets/images/techHazelIcon.png";
import { FaCirclePlus } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import profile1 from "../../assets/images/profile (1).png";
import profile2 from "../../assets/images/profile (2).png";
import profile3 from "../../assets/images/profile 3.png";
import profile4 from "../../assets/images/profile 4.png";

function Sidebar({ isSidebarOpen, toggleSidebar }) {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sidebarStyles = {
    position: screenSize >= 640 ? "relative" : "absolute",
    zIndex: screenSize >= 640 ? "auto" : 9999,
    left: 0,
    top: 0,
  };

  return (
    <div
      className={` h-full sm:block flex  ${
        isSidebarOpen ? "translate-x-0" : "hidden -translate-x-full"
      }fixed inset-0 transition-transform ease-in-out duration-300`}
      style={sidebarStyles}
    >
      {/* SIDEBAR-HEADER */}
      <div className="px-9 py-7 bg-sidebarbg h-full ">
        <div className="flex items-center justify-between gap-2">
          <Link to="/" className="flex items-center gap-3 px-1 py-4 mb-2">
            <img src={techHazelIcon} alt="TechHazel" className="h-[24px]" />
            <span className="text-lg font-pt-mono font-bold">TechHazel</span>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mt-7">
          <div className="h-[72px] w-[72px] p-0.5 flex items-center justify-center border-[2.5px] border-blue-800 rounded-full">
            <img src={profileIcon} alt="profile icon" />
          </div>
          <p className="font-semibold text-sm mt-3 mb-2">Catherine Reed</p>
          <div className="flex text-[12px] items-center gap-1 bg-white px-3 py-1 rounded-2xl shadow-md">
            <FaStar color="gold" />
            Admin
          </div>
        </div>
        <div className="flex-1 py-8 flex flex-col gap-5">
          {Sidebar_Links.map((item) => (
            <SidebarLink key={item.key} item={item}></SidebarLink>
          ))}
        </div>
        <div>
          <div className="flex py-4 justify-center items-center relative">
            <img className="h-[32px] absolute left-4" src={profile1} alt="" />
            <img className="h-[32px] absolute left-8" src={profile2} alt="" />
            <img className="h-[32px] absolute left-12" src={profile3} alt="" />
            <img className="h-[32px] absolute left-16" src={profile4} alt="" />
            <FaCirclePlus size={32} className="absolute left-20" />
          </div>
          {/* <div className="flex flex-wrap">Find new member</div> */}
        </div>
      </div>
      <div className="w-14 flex-shrink-0 p-2 mt-2">
        <CgClose size={20} className="sm:hidden " onClick={toggleSidebar} />
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={`flex items-center px-3 py-2 gap-5 hover:text-blue-500 hover:no-underline active:text-blue-500 rounded-sm text-base font-semibold ${
        pathname === item.path ? "text-blue-500" : ""
      }`}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}

export default Sidebar;
