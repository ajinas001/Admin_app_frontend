import React, { useState } from "react";
import { FaRegUserCircle} from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-2 flex items-end justify-end p-4">
      {/* Account Icon */}
      <div className="relative">
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
                マイアカウント {/* My Account */}
              </li>
              <Link to={'/login'}>
                <li className="px-4 py-2 flex items-center hover:bg-hovercolor cursor-pointer">
                  <LuLogOut className="mr-2 text-textPrimary" />
                  ログアウト {/* Logout */}
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
