import React, { useState, ReactNode } from 'react';

// Define the types for the component's props.
interface SimpleDropdownProps {
  buttonText?: string;       // Optional string for the button label.
  children: ReactNode;       // ReactNode allows any valid React element as children.
}

/**
 * A basic, simple dropdown component in TypeScript.
 */
const SimpleDropdown: React.FC<SimpleDropdownProps> = ({ buttonText = "Options", children }) => {
  // The 'isOpen' state is automatically inferred as a boolean by TypeScript.
  const [isOpen, setIsOpen] = useState(false);

  // This function's type is inferred as () => void.
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      
      {/* Button to control the dropdown */}
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <span>{buttonText}</span>
        <svg className="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>

      {/* Dropdown Menu - shows only if 'isOpen' is true */}
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-10">
          {children}
        </div>
      )}
      
    </div>
  );
};

export default SimpleDropdown;