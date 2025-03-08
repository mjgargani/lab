import React from 'react';

interface ButtonProps {
  active?: boolean;
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ active = false, onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} w-full md:w-auto py-2 px-4 text-center rounded-md transition-colors duration-300 cursor-pointer
        ${active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white'}`}
    >
      {children}
    </button>
  );
};

export default Button;
