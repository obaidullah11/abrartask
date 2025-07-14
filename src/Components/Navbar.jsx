import React, { useState } from "react";
import { HiMenu, HiChevronDown, HiX } from "react-icons/hi";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
const navigate =useNavigate();
  return (
    <>
      <div className="w-screen px-3 sm:px-6 md:px-14 py-4 z-20 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 w-full">
            <Link to="/" className="flex items-center gap-0">
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
             <Link 
             to='/serviceArea'> <li className="cursor-pointer">Service Areas</li></Link>
             <Link to="/faq">
              <li className="cursor-pointer">FAQ</li>
             </Link>
              <li className="cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <div
              className={`flex sm:flex-row gap-2 items-end sm:items-center z-10 ${
                showMenu ? "hidden" : ""
              } lg:flex`}
            >
              
              <Button
                className="bg-black cursor-pointer text-white px-3 sm:px-6 gap-1 sm:gap-2 py-[7px] text-[7px] sm:text-sm whitespace-nowrap"
                icon="/SVG.png"
                iconClass="h-2 sm:h-auto object-cover"
                text="MAKE APPOINTMENT"
                onClick={() => navigate("/make-appointment")}
                />
                
              <Button
                className="bg-[#FFAF1E] cursor-pointer flex items-center justify-center gap-1 sm:gap-2 text-black px-2 sm:px-4 py-[7px] font-semibold text-[7px] sm:text-sm whitespace-nowrap"
                icon="/phone icon.png"
                iconClass="w-2 h-auto sm:w-4 sm:h-auto"
                text="(210) 900-9000"
              />
            </div>
            <button
              className="lg:hidden text-[#FFAF1E] text-3xl z-50 relative"
              onClick={() => setShowMenu(true)}
              aria-label="Open menu"
            >
              <HiMenu />
            </button>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        {showMenu && (
          <div className="fixed inset-0 bg-[#FFAF1E] bg-opacity-95 z-[9999] flex flex-col items-center justify-center transition-all duration-300">
            <button
              className="absolute top-6 right-6 text-3xl text-black"
              onClick={() => setShowMenu(false)}
              aria-label="Close menu"
            >
              <HiX />
            </button>
            <ul className="flex flex-col gap-8 text-2xl font-semibold items-start">
              <Link to="/about-us" onClick={() => setShowMenu(false)}>
                <li className="cursor-pointer">About</li>
              </Link>
              <div className="relative">
                <li
                  className="cursor-pointer flex items-center gap-2"
                  onClick={() => setShowServices((prev) => !prev)}
                >
                  Services <HiChevronDown className="text-xl" />
                </li>
                {showServices && (
                  <ul className="flex flex-col bg-white shadow-lg rounded min-w-[220px] z-[10000] mt-2 text-lg absolute left-1/2 -translate-x-1/2 top-full">
                    <Link
                      to="/automotive"
                      onClick={() => {
                        setShowServices(false);
                        setShowMenu(false);
                      }}
                    >
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Automotive Locksmith
                      </li>
                    </Link>
                    <Link
                      to="/residential"
                      onClick={() => {
                        setShowServices(false);
                        setShowMenu(false);
                      }}
                    >
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Residential Locksmith
                      </li>
                    </Link>
                    <Link
                      to="/commercial"
                      onClick={() => {
                        setShowServices(false);
                        setShowMenu(false);
                      }}
                    >
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Commercial Locksmith
                      </li>
                    </Link>
                    <Link
                      to="/emergency"
                      onClick={() => {
                        setShowServices(false);
                        setShowMenu(false);
                      }}
                    >
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        24/7 Emergency Locksmith
                      </li>
                    </Link>
                  </ul>
                )}
              </div>
              <li className="cursor-pointer" onClick={() => setShowMenu(false)}>
                Service Areas
              </li>
              <li className="cursor-pointer" onClick={() => setShowMenu(false)}>
                FAQ
              </li>
              <li className="cursor-pointer" onClick={() => setShowMenu(false)}>
                Contact Us
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
