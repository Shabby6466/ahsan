import React from "react";

export default function Button() {
  return (
    <div>
        
      <button className="relative top-10 bg-yellow-300 border border-yellow-500 w-[110px] rounded-4xl h-[45px]"> 
        Send
      </button>
    </div>
    // when the parent (in this case the parent div is in input) is absolute, the child (if it is relative) will move as the parent div also moves, hence the Send button will move relative to the displacement of the input fields
  );
}
