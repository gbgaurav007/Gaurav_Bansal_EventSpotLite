import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import logo from '/assets/logo.png';
import logo2 from '/assets/logo2.png';

const Navbar = ({ setSearchTerm }) => {
  const navigate = useNavigate();

  // Function to navigate to the events page when search is clicked
  const handleSearchClick = () => {
    navigate('/events');
  };

  return (
    // Main header section with a gradient background and shadow
    <nav className="border-gray-200 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-300 text-white p-3 flex items-center justify-between">
      <Link to="/">
        <img
          src={logo}
          alt="EventSpot Lite"
          className="hidden md:block h-12 w-auto"
        />
        <img
          src={logo2}
          alt="EventSpot"
          className="block md:hidden h-12 w-auto"
        />
      </Link>

      <div
        className="flex items-center bg-gray-100 rounded-full overflow-hidden md:w-64 w-full mx-3"
        onClick={handleSearchClick}
      >
        <input
          type="text"
          placeholder="Search events..."
          className="bg-gray-100 text-black w-full px-4 py-2 focus:outline-none md:block"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="p-2 cursor-pointer md:pl-2">
          <FaSearch className="text-blue-500 hover:text-blue-300" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;