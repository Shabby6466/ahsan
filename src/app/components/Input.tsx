import React from "react";
import Button from "./Button";

export default function Input() {
  return (
    <div className="absolute top-110 left-10 w-[400px]">
      <div className="flex flex-col gap-[20px]">
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
      <Button />
    </div>
  );
}
