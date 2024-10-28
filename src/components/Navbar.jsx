import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "/assets/logo.png";
import logo2 from "/assets/logo2.png";

const Navbar = ({ setSearchTerm }) => {
  const navigate = useNavigate();

  // Function to navigate to the events page when search is clicked
  const handleSearchClick = () => {
    navigate('/events');
  };

  return (
    // Main header section with a gradient background and shadow
    
    <header className="bg-gradient-to-b from-blue-400 via-blue-300 to-blue-300 shadow sticky z-50 top-0 mb-3">
      <nav
        className="border-gray-200 px-4 lg:px-6 py-2.5"
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="EventSpot Lite"
              className="hidden md:block h-12 w-auto mr-3"
            />
            <img
              src={logo2}
              alt="EventSpot"
              className="block md:hidden h-12 w-auto mr-3"
            />
          </Link>

          <div className="flex items-center lg:order-2">
            <div
              className="flex items-center bg-gray-100 rounded-full overflow-hidden md:w-64 w-full mx-3"
              onClick={handleSearchClick}
            >
              <input
                type="text"
                placeholder="Search events..."
                className="bg-gray-100 w-full px-4 py-2 focus:outline-none md:block"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="p-2 cursor-pointer md:pl-2">
                <FaSearch className="text-blue-500 hover:text-blue-300" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;