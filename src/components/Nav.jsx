import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold hover:scale-105 transition-transform"
        >
          Shop Smart with Juan
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-200 transition-colors">
            Home
          </a>
          <a
            href="/electronics"
            className="hover:text-gray-200 transition-colors"
          >
            Electronics
          </a>
          <a href="/celana" className="hover:text-gray-200 transition-colors">
            Celana
          </a>
          <a href="/pakaian" className="hover:text-gray-200 transition-colors">
            Pakaian
          </a>
          <a href="/makeup" className="hover:text-gray-200 transition-colors">
            Make Up
          </a>
          <a href="/about" className="hover:text-gray-200 transition-colors">
            About Me
          </a>
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
          <a href="/" className="block px-4 py-2 hover:bg-sky-500">
            Home
          </a>
          <a href="/electronics" className="block px-4 py-2 hover:bg-sky-500">
            Electronics
          </a>
          <a href="/celana" className="block px-4 py-2 hover:bg-sky-500">
            Celana
          </a>
          <a href="/pakaian" className="block px-4 py-2 hover:bg-sky-500">
            Pakaian
          </a>
          <a href="/makeup" className="block px-4 py-2 hover:bg-sky-500">
            Make Up
          </a>
          <a href="/about" className="block px-4 py-2 hover:bg-sky-500">
            About Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
