import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiShoppingBag, FiSearch, FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wider">
            TOUCHÉ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/revista" className="text-sm font-medium hover:text-gray-600 transition-colors">
              REVISTA
            </Link>
            <Link to="/tienda" className="text-sm font-medium hover:text-gray-600 transition-colors">
              TIENDA
            </Link>
            <Link to="/promociones" className="text-sm font-medium hover:text-gray-600 transition-colors">
              PROMOCIONES
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span className="hidden sm:block text-sm font-medium">MARIA</span>
            <FiUser className="h-5 w-5 cursor-pointer hover:text-gray-600" />
            <FiShoppingBag className="h-5 w-5 cursor-pointer hover:text-gray-600" />
            <FiSearch className="h-5 w-5 cursor-pointer hover:text-gray-600" />
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/revista"
                className="block px-3 py-2 text-base font-medium hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                REVISTA
              </Link>
              <Link
                to="/tienda"
                className="block px-3 py-2 text-base font-medium hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                TIENDA
              </Link>
              <Link
                to="/promociones"
                className="block px-3 py-2 text-base font-medium hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                PROMOCIONES
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;