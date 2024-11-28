import { useState } from "react";
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold hover:scale-105 transition-transform"
        >
          Shop Smart with Juan
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className="hover:text-gray-200 transition-colors"
            activeClassName="text-gray-300" // Ganti dengan kelas yang diinginkan saat aktif
          >
            Home
          </NavLink>
          <NavLink
            to="/electronics"
            className="hover:text-gray-200 transition-colors"
            activeClassName="text-gray-300" // Ganti dengan kelas yang diinginkan saat aktif
          >
            Electronics
          </NavLink>
          <NavLink
            to="/celana"
            className="hover:text-gray-200 transition-colors"
            activeClassName="text-gray-300" // Ganti dengan kelas yang diinginkan saat aktif
          >
            Celana
          </NavLink>
          <NavLink
            to="/pakaian"
            className="hover:text-gray-200 transition-colors"
            activeClassName="text-gray-300" // Ganti dengan kelas yang diinginkan saat aktif
          >
            Pakaian
          </NavLink>
          <NavLink
            to="/makeup"
            className="hover:text-gray-200 transition-colors"
            activeClassName="text-gray-300" // Ganti dengan kelas yang diinginkan saat aktif
          >
            Make Up
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-gray-200 transition-colors"
            activeClassName="text-gray-300" // Ganti dengan kelas yang diinginkan saat aktif
          >
            About Me
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-sky-600 text-white shadow-lg">
          <NavLink to="/" className="block px-4 py-2 hover:bg-sky-500">
            Home
          </NavLink>
          <NavLink to="/electronics" className="block px-4 py-2 hover:bg-sky-500">
            Electronics
          </NavLink>
          <NavLink to="/celana" className="block px-4 py-2 hover:bg-sky-500">
            Celana
          </NavLink>
          <NavLink to="/pakaian" className="block px-4 py-2 hover:bg-sky-500">
            Pakaian
          </NavLink>
          <NavLink to="/makeup" className="block px-4 py-2 hover:bg-sky-500">
            Make Up
          </NavLink>
          <NavLink to="/about" className="block px-4 py-2 hover:bg-sky-500">
            About Me
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;
