"use client"
import React, { useState, useEffect, useRef } from "react";
import SimpleDropdown from "../dropdown";
const UsersPage = () => {
  return (
    <body className="h-screen bg-gradient-to-b from-purple-600 to-white-900">
      <header className="">
        {/* navbar header below */}
        <div className="px-8 py-5 flex items-center justify-between">
          {/* outermost div */}
          <div className="flex space-x-[5px] items-center justify-left w-[200px]">
            {/* CM logo and text div */}
            <div className="">
              <img src="/cm.png" alt="logo" className="w-[60px] h-[70px]" />
            </div>
            <div className="">
              <h4 className="text-white font-stretch-ultra-expanded">
                Creative
              </h4>
              <h4 className="text-yellow-300 font-bold">Marketing</h4>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between w-[400px]">
              <h6>Home</h6>
              <h6>Services</h6>
              <h6>Blog</h6>
              <h6>About</h6>
              <h6>FAQ</h6>
            </div>
          </div>
        </div>
      </header>

      <div className="absolute top-53 left-10 font-extrabold w-[806px]">
        <h1 className="text-yellow-300">Subscribe Now</h1>
        <h1 className="text-white">to Our Newsletter</h1>
      </div>
      <div className=" absolute top-100 left-10">
        <p className="text-white w-[540px]">
          Lorem ipsumdolor sit amet, consectetu arnum franum. Lorem ipsumdolor
          sit amet, consectetu arnum franum Lorem ipsumdolor sit amet,
          consectetu arnum franum Lorem ipsumdolor sit amet, consectetu arnum
          franum
        </p>
      </div>
      <div className="absolute top-130 left-10 flex flex-col gap-[20px]">
        <input
          className="bg-white border border-white px-7 py-[12px] w-[350px] rounded-3xl"
          type="text"
          placeholder="Name"
        />
        <input
          className="bg-white border border-white px-7 py-[12px] w-[350px] rounded-3xl"
          type="email"
          placeholder="Email"
        />
      </div>
      <button className="absolute top-170 left-10 bg-yellow-300 border border-yellow-500 w-[110px] rounded-4xl h-[45px]">
        Send
      </button>
    </body>
  );
};

export default UsersPage;
