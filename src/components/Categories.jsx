import React from 'react';
import { FaUniversity, FaMobileAlt, FaShieldAlt, FaMoneyBillWave, FaExchangeAlt } from 'react-icons/fa';

const categories = [
  { name: 'Banques', icon: FaUniversity, color: '#4A90E2' },
  { name: 'Mobile Money', icon: FaMobileAlt, color: '#50E3C2' },
  { name: 'Assurances', icon: FaShieldAlt, color: '#F5A623' },
  { name: 'Microfinance', icon: FaMoneyBillWave, color: '#7ED321' },
  { name: 'Change', icon: FaExchangeAlt, color: '#BD10E0' },
];

function Categories() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-burkina-red mb-4">Catégories financières</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <a
            key={index}
            href="#"
            className="flex flex-col items-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <category.icon className="text-3xl mb-2" style={{ color: category.color }} />
            <span className="text-xs font-medium text-gray-700 text-center">{category.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Categories;