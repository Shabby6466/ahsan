import React from "react";
import Header from "./header";
import "./styles/globals.css";

export default function Home() {
  return (
    <div className="h-screen">
      <img
        src="/background.png"
        alt="page background"
        className="absolute h-screen w-screen"
      />
      <div className="border border-red-800 flex items-center absolute pt-[11px] ">
        <Header />
      </div>
    </div>
  );
}
