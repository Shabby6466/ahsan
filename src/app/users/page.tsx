"use client";
import React, { useState, useEffect, useRef } from "react";
import SimpleDropdown from "../dropdown";
import Header from "../components/Header";
import button from "../components/Input";
import Input from "../components/Input";
const UsersPage = () => {
  return (
    <body className="h-screen bg-gradient-to-b from-purple-600 to-white-900">
      <Header />
      <div className="relative top-20 left-10 font-extrabold w-[806px]">
        <h1 className="text-yellow-300">Subscribe Now</h1>
        <h1 className=" text-white">to Our Newsletter</h1>
      </div>
      <div className="relative top-25 left-10">
        <p className="text-white w-[540px]">
          Lorem ipsumdolor sit amet, consectetu arnum franum. Lorem ipsumdolor
          sit amet, consectetu arnum franum Lorem ipsumdolor sit amet,
          consectetu arnum franum Lorem ipsumdolor sit amet, consectetu arnum
          franum
        </p>
      </div>
      <Input />
    </body>
  );
};

export default UsersPage;
