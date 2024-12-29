import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaUsers, FaNetworkWired, FaUserShield } from "react-icons/fa";
import { IoGiftOutline } from "react-icons/io5";
import { LuUsersRound } from "react-icons/lu";
import { LiaUserTieSolid } from "react-icons/lia";
import { AiOutlineAppstore } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = ({ onMenuClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("ダッシュボード");

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuClick = (item) => {
        setActiveItem(item);
        if (onMenuClick) {
            onMenuClick(item); // Notify parent component
        }
        if (window.innerWidth <= 1024) {
            setIsOpen(false); // Close sidebar on tablets and smaller screens
        }
    };

    const menuItems = [
        { name: "ダッシュボード", icon: <AiOutlineAppstore size={25} /> },
        { name: "登録ユーザー", icon: <LuUsersRound size={25} /> },
        { name: "通信量", icon: <IoGiftOutline size={25} /> },
        { name: "運営管理者", icon: <LiaUserTieSolid size={25} /> }
    ];

    return (
        <div className="relative md:min-h-screen">
            <button
                onClick={toggleSidebar}
                className="  text-textPrimary rounded-md fixed top-0 left-4 z-50 lg:hidden md:block"
            >
                {isOpen
                    ? <IoClose size={25} className="top-4 left-4 mt-6 ml-28" />
                    : (
                        <div className="flex items-center">
                            <LuMenu size={25} />
                            <Link to={'/'}>
                            <img src="../src/assets/images/logo.png" alt="ルクミル Logo" className="w-40 h-16 ml-8" />
                            </Link>
                        </div>
                    )}
            </button>

            <div
                className={`fixed top-0 left-0 h-full bg-white shadow-sm  z-40 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0 lg:w-64 lg:static`}
            >
                <div className="text-xl font-bold text-primary mb-6 mt-12 ml-3 lg:mt-0">
                    <Link to={'/'}>
                    <img src="../src/assets/images/logo.png" alt="ルクミル Logo" className="w-40 h-16" />
                    </Link>
                </div>
                <nav>
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li
                                key={item.name}
                                className={`cursor-pointer p-3 px-4  flex items-center  ${activeItem === item.name
                                    ? "bg-[#fff4e6] text-primary font-bold w-full border-r-4 border-primary" // Added 'font-bold' for active item
                                    : "text-textPrimary hover:bg-gray-100 hover:text-primary"
                                    }`}
                                onClick={() => handleMenuClick(item.name)}
                            >
                                {item.icon}
                                <span className="ml-2">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black bg-opacity-25 z-30 lg:hidden"
                ></div>
            )}
        </div>
    );
};

export default Sidebar;
