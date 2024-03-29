import React from "react";
import { useState } from "react";
import logo from "../../../public/logonew.png";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const linkClasses ="flex items-center font-f-poppins font-p-600 py-3 text-custom-white top-[356px] left-[80px] w-[142px] hover:opacity-100 rounded-sm text-base"

export default function Sidebar() {
  return (
    <div className="pl-[80px] pt-[65px]">
      <div className="bg-custombg-color w-[197px] h-[651px] flex flex-col text-white">
        {/*Notification*/}
        <div className="px-12 absolute">
          <div className="absolute items-center w-[29px] h-[29px] rounded-full bg-noti-color font-f-poppins font-p-400 text-[13px] p-1 text-center leading-[19.5px] tracking-[0.22px] text-custom-white">
            4
          </div>
        </div>
        {/*Image*/}
        <div className="flex w-[72px] h-[72px] pt-2">
          <img src={logo} className="rounded-lg" alt="logo" />
        </div>
        {/*Name & Email*/}
        <div className="flex col-auto w-[163px] h-[35px] pt-1">
          <div className="font-f-poppins font-p-600 text-[30px] text-custom-white">Samantha</div>
        </div>
        <div className="flex col-auto w-[197px] h-[27px] pt-1">
          <div className="font-f-poppins font-p-400 text-[17px] opacity-60 text-custom-white">
            samantha@mail.com
          </div>
        </div>
        {/* Menue */}
        <div className="mt-[233px]">
        <div className="flex=1 ">
          {DASHBOARD_SIDEBAR_LINKS.map((link) =>(
            <SidebarLink key={link.key} link={link}/>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ link }){
  
  const{ pathname } =useLocation();
  const linkClass = classNames(
    linkClasses,
    {
      "text-custom-white": pathname === link.path,
      "text-custom-white opacity-20": pathname !== link.path
    }
  );

  return(
    <Link to={link.path} className={linkClass}>
      {link.label}
    </Link>
  );
}