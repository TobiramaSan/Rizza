import React, { useState } from "react";
import { logo } from "../assets";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { FiShoppingBag, FiStar, FiUser } from "react-icons/fi";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
      <div className="">
        {/*Logo*/}
        <img src={logo} alt="" className="w-44" />
      </div>
      {/*Searchbar*/}
      <div className="hidden md:inline-flex flex-row max-w-3xl w-full relative ">
        <input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          type="text"
          className="w-full flex-1 rounded-full border-0 py-2 text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1   focus:ring-inset focus:ring-darkText sm:text-sm sm:leading-6 px-4"
          placeholder="Find Products"
          value={searchText}
        />
        {searchText ? (
          <IoClose
            onClick={() => setSearchText("")}
            className="absolute top-2.5 right-4 text-xl"
          />
        ) : (
          <IoSearchOutline className="absolute top-2.5 right-4 text-xl" />
        )}
      </div>
      {/*Menubar */}
      <div className="flex items-center gap-x-6 text-2xl ">
        <FiUser className="hover:text-sky-200 duration-200 cursor-pointer" />
        <div className="relative block">
          <FiStar className="hover:text-sky-200 duration-200 cursor-pointer" />
          <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] w-4 h-4 rounded-full">
            0
          </span>
        </div>
        <div className="relative block">
          <FiShoppingBag className="hover:text-sky-200 duration-200 cursor-pointer" />
          <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] w-4 h-4 rounded-full">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
