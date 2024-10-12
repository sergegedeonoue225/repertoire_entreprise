import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import FinancialServices from './components/FinancialServices';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <SearchBar />
        <Categories />
        <FinancialServices />
      </main>
    </div>
  );
}

export default App;