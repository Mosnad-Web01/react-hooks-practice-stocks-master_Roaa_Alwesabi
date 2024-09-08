import React, { useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [portfolio, setPortfolio] = useState([]);
  const [sortType, setSortType] = useState('Alphabetically'); // أو 'Price'
  const [filterType, setFilterType] = useState('');

  const handleBuyStock = (stock) => {
    setPortfolio([...portfolio, stock]);
  };

  const handleSellStock = (stock) => {
    setPortfolio(portfolio.filter(s => s.id !== stock.id));
  };

  return (
    <div>
      <Header />
      <MainContainer
        sortType={sortType}
        filterType={filterType}
        onSortChange={setSortType}
        onFilterChange={setFilterType}
        onBuyStock={handleBuyStock}
        onSellStock={handleSellStock}
        portfolio={portfolio}
      />
    </div>
  );
}

export default App;
