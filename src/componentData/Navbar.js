import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Your Logo</div>
        <ul className="flex space-x-4">
          <li className="text-white hover:text-gray-400 cursor-pointer">Home</li>
          <li className="text-white hover:text-gray-400 cursor-pointer">About</li>
          <li className="text-white hover:text-gray-400 cursor-pointer">Services</li>
          <li className="text-white hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
