 import React from 'react'
 
 export default function Header() {
   return (
     <header>
       {/* navbar header below */}
               <div className=" border border-gray-400 px-8 py-5 flex items-center justify-between">
                 {/* outermost div */}
                 <div className="flex space-x-[5px] items-center justify-left w-[200px]">
                   {/* CM logo and text div */}
                   <div className="">
                     <img src="/cm.png" alt="logo" className="w-[60px] h-[70px]" />
                   </div>
                   <div id = 'ahsan' className="">
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
   )
 }
 