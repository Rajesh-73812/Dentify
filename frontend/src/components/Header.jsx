import React, { useState, useEffect } from "react";
import { NotificationIcon, ProfileIcon } from "./Icons";
import { FaUser, FaSignOutAlt, FaCog } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isHovered) {
        setShowCard(true);
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [isHovered]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!isHovered) {
        setShowCard(false);
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [isHovered]);

  const logout=()=>{
    navigate("/")
  }

  const account=()=>{
    navigate("/profile")
  }
  return (
    <div className="bg-white h-[65px] sm:h-[80px] p-6 flex items-center justify-between">
      {/* Title Section */}
      <div className="flex items-center gap-2.5">
        <span className="text-2xl font-bold">Header Title</span>
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-5">
        {/* Notification Icon */}
        <div className="bg-[#f7fbff] rounded-full size-8 sm:size-11 flex items-center justify-center">
          <NotificationIcon />
        </div>

        {/* Profile Icon with Smooth Hover Card */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Profile Icon */}
          <div className="bg-[#f7fbff] rounded-full size-8 sm:size-11 flex items-center justify-center cursor-pointer">
            <ProfileIcon />
          </div>

          {/* Smooth Hover Card */}
          {showCard && (
            <div 
              className={`absolute top-12 right-0 w-[220px] bg-white border border-gray-300 rounded-lg shadow-lg z-10 transition-all duration-300`}
            >
              <ul className="py-2 divide-y divide-gray-200">
                <li className="px-4 py-3 flex items-center gap-3 hover:bg-gray-100 cursor-pointer" onClick={account}>
                  <FaUser className="text-gray-500" /> <span>Account</span>
                </li>
                <li className="px-4 py-3 flex items-center gap-3 hover:bg-gray-100 cursor-pointer" onClick={logout}>
                  <FaSignOutAlt className="text-gray-500" /> <span>Logout</span>
                </li>
                <li className="px-4 py-3 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
                  <FaCog className="text-gray-500" /> <span>Settings</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;