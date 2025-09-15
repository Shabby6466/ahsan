"use client";
import React, { useState } from "react";

const FlagDropdown = () => {
  return (
    <div className="DropdownMenu left-[-54] rounded-md shadow-lg ring-0">
      <div className="DropdownText flex flex-col items-center py-1">
        <div className="LanguageStuff">Language</div>
        <div className = "FF30">
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w- rounded-lg"
          role="menuitem"
        >
          A!
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w- rounded-lg"
          role="menuitem"
        >
          A!
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w- rounded-lg"
          role="menuitem"
        >
          A!
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          B.
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          C.
        </a>
        </div>
      </div>
    </div>
  );
};

export default function Wallet() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleFlagDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="Wallets flex flex-row justify-between items-center p-2">
        {/* MAIN OVERALL DIV */}
        <div className="ff-20 flex flex-row items-center space-x-4">
          {/* flag + notification div  */}

          <button
            type="button"
            onClick={toggleFlagDropdown}
            aria-haspopup="true"
            arira-expanded={isDropdownOpen ? "true" : "false"}
            className="Flag border border-red-900 flex flex-row "
          >
            🇺🇸
            <img
              src="dropdown.svg"
              className=""
              aria-hidden="true"
              data-testid="ExpandMoreIcon"
            ></img>
          </button>

          <div className="relative flex ">
            {/* div for the dropdown */}
            {isDropdownOpen && <FlagDropdown />}{" "}
            {/* Conditionally render the dropdown */}
          </div>

          <div className="relative">
            {/* This div is now relative for positioning the dropdown */}
            <button type="button" className="Bell">
              <img
                src="/notification.svg"
                alt="notification bell icon"
                className="w-[20px]"
              />
            </button>
          </div>
        </div>
        <div className="Wallet mx-12">Connect Wallet</div>
      </div>
    </div>
  );
}
