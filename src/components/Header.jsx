import React from 'react';
import { FaUser, FaBuilding, FaListAlt, FaSignInAlt } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-burkina-green shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="https://www.taktilcommunication.com/uploads/images/blog/content/annuaires-de-web-1466180821.jpg" alt="Logo" className="h-8 mr-4" />
            <button className="md:hidden flex items-center text-white hover:text-burkina-yellow text-sm" id="menu-button">
              <FaListAlt className="mr-1" />
              <span className="hidden md:inline">Menu</span>
            </button>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                <li><a href="#" className="text-white hover:text-burkina-yellow text-sm">Services</a></li>
                <li><a href="#" className="text-white hover:text-burkina-yellow text-sm">Particuliers</a></li>
                <li><a href="#" className="text-white hover:text-burkina-yellow text-sm">Entreprises</a></li>
              </ul>
            </nav>
            <div className="hidden md:hidden" id="mobile-menu">
              <ul className="flex flex-col space-y-4">
                <li><a href="#" className="text-white hover:text-burkina-yellow text-sm">Services</a></li>
                <li><a href="#" className="text-white hover:text-burkina-yellow text-sm">Particuliers</a></li>
                <li><a href="#" className="text-white hover:text-burkina-yellow text-sm">Entreprises</a></li>
              </ul>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center text-white hover:text-burkina-yellow text-sm">
              <FaListAlt className="mr-1" />
              <span className="hidden md:inline">Se référencer</span>
            </a>
            <a href="#" className="flex items-center text-white hover:text-burkina-yellow text-sm">
              <FaSignInAlt className="mr-1" />
              <span className="hidden md:inline">Se connecter</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;