import React from "react";
import Header from "./header";
import "./styles/globals.css";
import Wallet from "./wallet";

export default function Home() {
  return (
    <div className="h-screen">
      <img
        src="/background.png"
        alt="page background"
        className="absolute h-screen w-screen"
      />
      <div className=" flex items-center absolute pt-[11px] ">
        <Header />
      </div>
      <div>
        <img src="/left-ellipse.png" className="Left" />
        <img src="/right-ellipse.png" className="Right" />
        <img src="/right-ellipse.png" className="RightTwo" />
      </div>
    </div>
  );
}
