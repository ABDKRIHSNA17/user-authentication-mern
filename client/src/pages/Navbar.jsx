import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">MyApp</h1>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
          </li>
          <li>
            <Link to="/profile" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Profile</Link>
          </li>
          
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white hover:bg-gray-700 p-2 rounded-full focus:outline-none"
            >
              <FaUser size={24} />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-10">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Signup
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
