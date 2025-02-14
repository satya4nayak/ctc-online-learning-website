import logo from '../assets/img/logo.ico';
import React, { useState } from "react";
import axios from "axios";

const Navbar = () => {
  return (
    <nav className="navbar bg-logo-yellow flex w-screen h-[8vh] p-0 border-b-[1px] border-yellow-100">
      {/* Logo */}
      <div className="logo grid absolute h-[7vw] w-[7vh] ml-[1.5%] mt-1">
        <img src={logo} alt="Logo" className="rounded-3xl" />
      </div>
      {/* Browse Button */}
      <div className='browse-button grid absolute h-[7%] w-[5vh] ml-[7%] mt-[0.3%]'>
        <button className="bg-logo-yellow hover:bg-yellow-100 text-black font-thin my-[5%] px-[2vh] transition-filter duration-300">
          Browse
        </button>
      </div>
      {/* Search Bar */}
      <div className="search-bar grid relative w-[45%] ml-[16%] my-[0.5%]">
        <input type="text" placeholder="Search..." className="rounded-3xl h-full pl-[5%] border-gray-800 border-[0.3px] outline-none focus:outline-none"/>
      </div>

      {/* Sign In and Sign Up Buttons */}
      <div className="sign-in-up flex absolute h-[6%] w-[15%] ml-[85%] my-[0.5%]">
        <button className="bg-black hover:bg-gray-700 text-white font-thin w-[40%] h-[100%] px-[2%] transition-filter duration-300 rounded-lg border-gray-800 border-[0.5px]">
          Sign In
        </button>
        <div className='p-[2%]'></div>
        <button className="bg-logo-yellow hover:bg-yellow-200 text-black font-thin w-[40%] h-[100%] px-[2%] transition-filter duration-300 rounded-lg border-gray-800 border-[0.5px]">
          Sign Up
        </button>
      </div>


    </nav>
  );
};

export default Navbar;