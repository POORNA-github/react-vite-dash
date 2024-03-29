import React from "react";
import { Link } from "react-router-dom";
import Expensesleft from "./Expensesleft";
import Expensesright from "./Expensesright";
export default function Expenses() {
  return (
    //content
     
    <div className="lg:flex bg-custom-white font-poppins mt-5 rounded-3xl mr-3 mb-10">
    {/* right content*/}
      <div className="flex-1">
    {/* main content*/}  
        <div className="flex sm:p-20">
        <Expensesleft />
      </div>
      </div> 
      <div className="w-full lg:w-[350px] bg-custom-ash rounded-3xl shrink lg:mt-0 mt-5">
        <Expensesright />
      </div>
    </div> 
   
  );
}
