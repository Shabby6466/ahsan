import React, { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(true);
  };

  return (
    <div className=" w-[100px] relative flex justify-end">
      <div className="inline-table">
        <button
          type="button"
          className="px-4 py-2 text-white bg-violet-900 hover:bg-violet-600 active:bg-violet-700 font-medium rounded-2xl text-sm inline-flex items-center"
          onClick={toggleDropdown}
        >
          Settings{" "}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top absolute right-0 mt-2 w-40 rounded-xl shadow-lg bg-gray-400">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                <a
                  href="https://www.udemy.com/course/nextjs15-with-app-router-complete-with-react-the-fastest-nextjs-course/learn/lecture/49415873#overview"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-500 rounded-md"
                  onClick={toggleDropdown}
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="opera://settings/gx-basics"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-500 rounded-md"
                  onClick={toggleDropdown}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=K2DLwoG491k"
                  className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-500 rounded-md"
                  onClick={toggleDropdown}
                >
                  Log out
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default DropdownMenu;
