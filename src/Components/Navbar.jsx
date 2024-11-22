import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiFillHome } from "react-icons/ai";
import { RiMenu4Fill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleItemClick = (path) => {
    navigate(path);
    setNav(false);
  };

  const desktopMenuItems = [
    { name: "Home", path: "/" },
    // { name: "Our Work", path: "/ourWork" },
    { name: "Our Story", path: "/ourStory" },
  ];

  const donateButtonPath = "/donate";

  const mobileMenuItems = [
    {
      name: "Home",
      path: "/",
      icon: <AiFillHome size={20} className="mr-2" />,
    },
    // {
    //   name: "Our Work",
    //   path: "/ourWork",
    //   icon: <MdWork size={20} className="mr-2" />,
    // },
    {
      name: "Our Story",
      path: "/ourStory",
      icon: <FaBook size={20} className="mr-2" />,
    },
    {
      name: "Donate",
      path: donateButtonPath,
      icon: <FaDonate size={20} className="mr-2" />,
    },
  ];

  return (
    <motion.div className="flex justify-between items-center max-w-[1200px] px-4 mx-auto h-16 text-black">
      <Link to="/" className="font-bold text-2xl font-header">
        Kat Perry Foundation
      </Link>
      <div className="flex items-center space-x-4 md:space-x-10 font-header">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          {desktopMenuItems.map((item, index) => (
            <motion.li
              key={index}
              className="p-2 relative group cursor-pointer list-none"
              whileHover={{ scale: 1.1 }}
              onClick={() => handleItemClick(item.path)}
            >
              <span>{item.name}</span>
              <span className="absolute left-0 w-0 h-1 bg-[#FAB12F] transition-all group-hover:w-full bottom-[-2px]"></span>
            </motion.li>
          ))}
          {/* Unique Donate Button */}
          <motion.button
            className="px-6 py-2 bg-gradient-to-r from-[#FF7E5F] to-[#FAB12F] text-black rounded-full shadow-lg hover:shadow-xl font-bold hover:scale-105 transition-transform"
            whileHover={{ scale: 1.1 }}
            onClick={() => handleItemClick(donateButtonPath)}
          >
            Donate Now
          </motion.button>
        </div>
        {/* Mobile Menu Toggle */}
        <div onClick={handleNav} className="block md:hidden ml-auto">
          {nav ? <AiOutlineClose size={20} /> : <RiMenu4Fill size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-[70%] h-full bg-[#FA812F] text-white ease-in-out duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-2xl font-bold p-6">Kat Perry Foundation</h1>
        <ul className="p-4">
          {mobileMenuItems.map((item, index) => (
            <motion.li
              key={index}
              className={`p-4 border-b border-white flex items-center ${
                item.name === "Donate"
                  ? "bg-gradient-to-r from-[#FF7E5F] to-[#FAB12F] text-white rounded-lg shadow-md font-bold"
                  : ""
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleItemClick(item.path)}
            >
              {item.icon}
              <span>{item.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
