import React from 'react'

export default function Input() {
  return (
    <div className= "border border-black-700">
    <div className="relative top-90 left-10 flex flex-col gap-[20px]">
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
        <button className="relative top-0 left-10 bg-yellow-300 border border-yellow-500 w-[110px] rounded-4xl h-[45px]">
        Send
      </button>
      </div>
  )
}
