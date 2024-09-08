import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function StockContainer({ onBuy, portfolio, sortType, filterType }) {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(response => response.json())
      .then(data => setStocks(data));
  }, []);

  const sortedStocks = stocks
    .filter(stock => !filterType || stock.type === filterType)
    .sort((a, b) => {
      if (sortType === 'Alphabetically') {
        return a.ticker.localeCompare(b.ticker);
      } else if (sortType === 'Price') {
        return a.price - b.price;
      }
      return 0;
    });

  return (
    <div>
      <h2>Stocks</h2>
      {sortedStocks.map(stock => (
        <Stock
          key={stock.id}
          stock={stock}
          onBuy={onBuy}
          inPortfolio={portfolio.some(s => s.id === stock.id)}
        />
      ))}
    </div>
  );
}

export default StockContainer;
