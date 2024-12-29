import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/login") {
    return (
      <nav className="bg-background shadow-sm z-50 fixed w-full ">
        <div className="px-6 lg:px-6">
          <div className="flex items-center justify-between h-[76px]">
            <Link to={"/"}>
              <div className="text-xl font-bold text-primary mb-6">
                <img
                  src="/logo.png"
                  alt="ルクミル Logo"
                  className="w-60 h-24 m-4 mt-8"
                />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  if (location.pathname === "/dashboard") {
    return (
      <div className="fixed top-0 left-0 w-full bg-white  z-0 flex items-end justify-end p-4">
        {/* Account Icon */}
        <div className="relative">
          <Dropdown />
        </div>
      </div>
    );
  }
  return null;
};

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div
        className="text-textPrimary hover:text-hovercolor cursor-pointer"
        onClick={toggleDropdown}
      >
        <FaRegUserCircle size={25} />
      </div>
      {isDropdownOpen && (
        <div className="absolute right-0 pt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-1">
            <li className="px-4 py-2 flex items-center hover:bg-hovercolor cursor-pointer">
              <AiOutlineUser className="mr-2 text-textPrimary" />
              マイアカウント 
            </li>
            <Link to={"/login"}>
              <li className="px-4 py-2 flex items-center hover:bg-hovercolor cursor-pointer">
                <LuLogOut className="mr-2 text-textPrimary" />
                ログアウト 
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
