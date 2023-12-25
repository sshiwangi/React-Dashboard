import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1 bg-mainbg sm:py-7 sm:px-6">
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="p-4">
          <div>{<Outlet />}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
