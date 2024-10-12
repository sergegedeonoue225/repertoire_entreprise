import React from 'react';

function FinancialServices() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://via.placeholder.com/800x400.png?text=Services+financiers+publics" alt="Services financiers publics" className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-burkina-green mb-2">Services financiers publics</h3>
          <p className="text-sm text-gray-600">Découvrez les institutions financières publiques du Burkina Faso, offrant des services essentiels pour le développement économique du pays.</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://via.placeholder.com/800x400.png?text=Services+financiers+privés" alt="Services financiers privés" className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-burkina-red mb-2">Services financiers privés</h3>
          <p className="text-sm text-gray-600">Explorez les options offertes par le secteur financier privé au Burkina Faso, proposant des solutions innovantes pour vos besoins financiers.</p>
        </div>
      </div>
    </div>
  );
}

export default FinancialServices;