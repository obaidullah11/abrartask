import React, { useState } from "react";
import { HiMenu, HiChevronDown } from "react-icons/hi";
import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false); // Add this line

  return (
    <>
      <div className="w-screen  px-3 sm:px-6 md:px-14 py-4 z-20 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 w-full">
            <Link to="/" className="flex items-center gap-0">
              {" "}
              <img
                src="/logo.png"
                alt="Key-Kong Logo"
                className="h-7 w-7 sm:h-9 sm:w-9 object-contain"
              />
              <div className="text-black font-bold text-[10px] sm:text-sm leading-tight whitespace-nowrap">
                KEY-KONG <br /> LOCKSMITH
              </div>
            </Link>
            <ul className="hidden lg:flex flex-wrap gap-7 text-sm text-black justify-center w-full">
              <Link to="/about-us" className="cursor-pointer">
                About
              </Link>
              <div className="relative">
                <li
                  className="cursor-pointer flex items-center gap-1 select-none"
                  onClick={() => setShowServices((prev) => !prev)}
                >
                  Services <HiChevronDown className="text-base" />
                </li>
                {showServices && (
                  <ul className="absolute left-0 top-full mt-1 flex flex-col bg-white shadow-lg rounded min-w-[200px] z-50 text-black text-sm">
                    <Link
                      to="/automotive"
                      onClick={() => setShowServices(false)}
                    >
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                        Automotive Locksmith
                      </li>
                    </Link>
                    <Link
                      to="/residential"
                      onClick={() => setShowServices(false)}
                    >
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                        Residential Locksmith
                      </li>
                    </Link>
                    <Link
                      to="/commercial"
                      onClick={() => setShowServices(false)}
                    >
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                        Commercial Locksmith
                      </li>
                    </Link>
                    <Link
                      to="/emergency"
                      onClick={() => setShowServices(false)}
                    >
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                        24/7 Emergency Locksmith
                      </li>
                    </Link>
                  </ul>
                )}
              </div>
              <li className="cursor-pointer">Service Areas</li>
              <li className="cursor-pointer">FAQ</li>
              <li className="cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex sm:flex-row gap-2 items-end sm:items-center">
              <Button
                className="bg-black cursor-pointer text-white px-3 sm:px-6 gap-1 sm:gap-2 py-[7px] text-[7px] sm:text-sm whitespace-nowrap"
                icon="/SVG.png"
                iconClass="h-2 sm:h-auto object-cover"
                text="MAKE APPOINTMENT"
              />
              <Button
                className="bg-[#FFAF1E] cursor-pointer flex items-center justify-center gap-1 sm:gap-2 text-black px-2 sm:px-4 py-[7px] font-semibold text-[7px] sm:text-sm whitespace-nowrap"
                icon="/phone icon.png"
                iconClass="w-2 h-auto sm:w-4 sm:h-auto"
                text="(210) 900-9000"
              />
            </div>
            <button className="lg:hidden text-[#FFAF1E] text-3xl z-30 relative">
              <HiMenu />
            </button>
          </div>
        </div>
        {showMenu && (
          <ul className="flex flex-col absolute top-full left-0 w-full bg-white shadow-lg z-40  p-4 gap-4 text-black lg:hidden">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer flex items-center gap-1">
              Services <HiChevronDown />
            </li>
            <li className="cursor-pointer">Service Areas</li>
            <li className="cursor-pointer">FAQ</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
