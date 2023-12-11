import React, { useState } from "react";
import { Link } from "react-router-dom";
import CycloneSharpIcon from "@mui/icons-material/CycloneSharp";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
// import FaceIcon from "@mui/icons-material/Face";
// import { faEye } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import sharingon from "../Assets/Assets_Logo/sharingon.png"

// import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";
// import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Hamburger from 'hamburger-react'

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className="flex justify-between pr-2  pl-4 mt-0 shadow-md bg-color bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-16 hidden md:flex bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="flex items-center">
          <img className="w-7 mr-2 animate-spin animate-delay-[2ms] color-white" src={sharingon} alt=""></img>
          <div className="text-2xl font-bold mt-3 mb-4 text-white hover:text-orange-500">
            <Link to="/">Gymbylls</Link>
          </div>
        </div>
        <div className="flex space-x-10 text-white mt-4">
          <div className="hover:text-orange-500">
            <HomeIcon className="mb-1 animate-ping animate-once animate-delay-[1ms] mr-1" />
            <Link to="/">Home</Link>
          </div>
          <div className="hover:text-orange-500">
            <DesignServicesIcon className="mb-1 animate-ping animate-once animate-delay-[1ms] mr-1" />
            <Link to="/services">Services</Link>
          </div>
          <div className="hover:text-orange-500">
            <InfoIcon className="mb-1 animate-ping animate-once animate-delay-[1ms] mr-1" />
            <Link to="/about">About</Link>
          </div>
                  <div className="text-white hover:text-orange-500">
          <ContactsIcon className="animate-ping animate-once animate-delay-[1ms] mr-1" />
          <Link to="/contact">Contact</Link>
        </div>
        <div className="">
          <button
            onClick={toggleDropdown}
            className="text-white hover:text-orange-500"
          >
              <Link
                to="/login"
                className="block px-4  text-white hover:text-orange-500"
              >
                <LoginIcon className="animate-ping animate-once animate-delay-[1ms]" />{" "}
                Login
              </Link>
          </button>
        </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-30 bg-white border border-gray-300 rounded-lg shadow-lg">
                {/* <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-gray-800 hover:text-orange-500"
                >
                  {" "}
                  <DashboardIcon className="mb-1 animate-ping animate-once animate-delay-[1ms]" />{" "}
                  Dashboard
                </Link> */}
              {/* <Link
                to="/profile"
                className="block px-4 py-2 text-gray-800 hover:text-orange-500"
              >
                <ManageAccountsIcon className="animate-ping animate-once animate-delay-[1ms]" />{" "}
                Profile
              </Link> */}
            </div>
          )}
        </div>
      </div>
      <div>
      <div className=" flex justify-between items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 xl:hidden flex lg:hidden md:hidden flex xl:hidden flex 2xl:hidden flex">
          <div className="flex text-2xl font-bold mt-3 mb-4 text-white hover:text-orange-500">
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          <CycloneSharpIcon className="mt-3 mb-4 mr-2 ml-2 animate-spin animate-infinite" />
            <Link to="/" className="mt-2">Gymbulls</Link>
          </div>
          <div className="relative text-white" align="" >
          <button
            onClick={toggleDropdown}
            className="text-white hover:text-orange-500 "
          >
          <Link
                to="/login"
                className="block px-4 py-2 text-white hover:text-orange-500"
              >
                <LoginIcon className="animate-ping animate-once animate-delay-[1ms]" />{" "}
                Login
              </Link>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 pt-2 w-30 bg-white border border-gray-300 rounded-lg shadow-lg">
              {/* <Link
                to="/dashboard"
                className="block px-4 py-2 text-gray-800 hover:text-orange-500"
              >
                {" "}
                <DashboardIcon className="mb-1 animate-ping animate-once animate-delay-[1ms]" />{" "}
                Dashboard
              </Link> */}
              {/* <Link
                to="/profile"
                className="block px-4 py-2 text-gray-800 hover:text-orange-500"
              >
                <ManageAccountsIcon className="animate-ping animate-once animate-delay-[1ms]" />{" "}
                Profile
              </Link> */}
            </div>
          )}
        </div>
        </div> {isOpen && (
          <ul className="bg-white text-cyan-950 absolute left-0 w-30 border border-gray-300 rounded-lg shadow-lg">
            <li>
              <Link to="/" className="block py-2 px-4 hover:text-orange-500"><HomeIcon className="mb-1 mr-1"/>Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-4 hover:text-orange-500"><InfoIcon className="mb-1 mr-1"/>About</Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 px-4 hover:text-orange-500"><DesignServicesIcon className="mb-1 mr-1"/>Services</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-4 hover:text-orange-500"><ContactsIcon className="mb-1 mr-1"/>Contact</Link>
            </li>
          </ul> 
        )}
         <hr></hr>
      </div>
    </div>
    
  );
}
