import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow">
      
      {/* Adjust the paddings between sidebar and other content block */}
      <div className="flex mr-3 sm:p-10">
        <div className="hidden md:block Sidebar">
          <Sidebar />
        </div>
        
      </div>
      <div>{<Outlet />}</div>
    </div>
  );
}
