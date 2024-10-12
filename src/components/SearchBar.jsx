import React from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1">
          <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-1">Que recherchez-vous ?</label>
          <div className="relative">
            <input
              type="text"
              id="activity"
              className="w-full pl-10 pr-3 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burkina-green"
              placeholder="Activité, produit, service..."
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Où ?</label>
          <div className="relative">
            <input
              type="text"
              id="location"
              className="w-full pl-10 pr-3 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burkina-green"
              placeholder="Ville, code postal..."
            />
            <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-end">
          <button type="submit" className="w-full md:w-auto px-6 py-3 bg-burkina-green text-white text-sm font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out">
            Rechercher
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;