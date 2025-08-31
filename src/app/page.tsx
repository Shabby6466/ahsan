"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/users");
  };
return (
  <body className = 'h-screen bg-gradient-to-b from-purple-600 to-white-900'>
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-4">
        <div className="w-[360px] h-[450px] border border-purple-500 rounded-lg bg-white shadow-lg">
          {/* sign in  */}
          <div className="p-4 mb-1 ">
            <h1>Sign up</h1>
            <p>
              or{" "}
              <a
                href="https://gemini.google.com/app/09c30e5ace5831d4"
                className="text-blue-600 hover:text-blue-500 hover:underline "
              >
                create an account
              </a>
            </p>
            <div className="w-[94%] h-px bg-gray-600 my-4"></div>
          </div>
          {/* input */}
          {/* email and password */}
          <div className="flex flex-col justify-start gap-3 px-4">
            <input
              className="border-2 border-gray-500 w-[94%] px-2 py-2 rounded-xl bg-white shadow-md"
              placeholder="Email"
              type="email"
            ></input>

            <input
              className="border-2 border-gray-500 w-[94%] px-2 py-2 rounded-xl bg-white shadow-md"
              placeholder="Password"
              type="password"
            ></input>
          </div>

          <div className="p-4 px-5 flex items-center justify-start gap-2 text-sm font-thin text-gray-600">
            <input
              className="active:scale-90 transition-all"
              type="checkbox"
            ></input>
            <p className="tracking-wide">Remember me</p>
          </div>
          {/* buttons */}
          <div className="pl-4 flex flex-col gap-2 justify-start mb-2">
            <button className="bg-blue-500 text-white w-[91%] px-2 py-2 rounded-2xl font-semibold hover:bg-blue-600 active:scale-97 transition-all">
              {" "}
              Sign in{" "}
            </button>

            <button className="border border-black-500 w-[91%] px-2 py-2 flex items-center justify-center gap-2 rounded-2xl font-semibold hover:bg-gray-200 active:scale-97 transition-all">
              <img src="/google.png" alt="google" className="w-6 h-6" />
              Google
            </button>
          </div>
          <div className=" pl-5 px-1 py-1 w-[150px]">
            {" "}
            <a
              href="https://agentestudio.com/blog/login-page-design"
              className="text-blue-600 hover:underline"
            >
              Forgot?
            </a>
          </div>
        </div>
      </form>
    </div>
  </body>

    );
};
