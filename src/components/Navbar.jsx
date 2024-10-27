import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setSearchTerm, setCategoryFilter }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to={'/'}><h1 className="text-xl font-bold">EventSpot Lite</h1></Link>
    </nav>
  );
};

export default Navbar;