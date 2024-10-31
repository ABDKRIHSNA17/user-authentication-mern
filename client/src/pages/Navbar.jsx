import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">MyApp</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Signup</Link>
          </li>
          <li>
            <Link to="/profile" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
