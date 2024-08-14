import React from "react";
import { logo } from "../assets";

const Header = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
      <div className="">
        {/*Logo*/}
        <img src={logo} alt="" className="w-44" />
      </div>
      {/*Searchbar*/}
      <div className="hidden md:inline-flex flex-row max-w-3xl w-full relative ">
        <input
          type="text"
          className="w-full flex-1 rounded-full border-0 py-2 text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1   focus:ring-inset focus:ring-darkText sm:text-sm sm:leading-6 px-4"
          placeholder="search products"
        />
      </div>
    </div>
  );
};

export default Header;
