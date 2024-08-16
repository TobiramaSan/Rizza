import React, { useState } from "react";
import { logo } from "../assets";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { FiShoppingBag, FiStar, FiUser } from "react-icons/fi";
import Container from "./Container";
import { CgChevronDown } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const bottomNavigation = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/product" },
    { title: "Cart", link: "/cart" },
    { title: "Orders", link: "/orders" },
    { title: "My Account", link: "/profile" },
    { title: "Blog", link: "/blog" },
  ];

  return (
    <div className="w-full bg-whiteText">
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
        {/*Logo*/}
        <Link to="/">
          <img src={logo} alt="" className="w-44" />
        </Link>
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
          <Link to="/profile">
            <FiUser className="hover:text-sky-200 duration-200 cursor-pointer" />
          </Link>

          <Link to="/favourite" className="relative block">
            <FiStar className="hover:text-sky-200 duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] w-4 h-4 rounded-full">
              0
            </span>
          </Link>
          <Link to="/cart" className="relative block">
            <FiShoppingBag className="hover:text-sky-200 duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] w-4 h-4 rounded-full">
              0
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full bg-darkText text-whiteText">
        <Container className="py-2 max-w-4xl flex items-center gap-5 justify-between">
          <p className="inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1.5 px-3 text-sm/6 font-semibold text-gray-300 hover:text-white">
            select category <CgChevronDown />
          </p>
          {bottomNavigation.map(({ title, link }) => (
            <Link
              to={link}
              className="uppercase hidden md:inline-flex text-sm font-semibold text-whiteText/90 hover:text-white duration-200 relative overflow-hidden group"
              key={title}
            >
              {title}
              <span className="inline-flex w-full h-[1px] bg-whiteText absolute bottom-0 left-0 transform  -translate-x-[105%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Header;
