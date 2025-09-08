import React from "react";
import Header from "./header";

export default function Home() {
  return (
    <div className="h-screen">
      <img src="/background.png"
      alt="page background"
      className= "absolute h-screen w-screen "
      />
      <div className="absolute top-0 ">
        <Header />

        
      </div>
    </div>
      );
}
