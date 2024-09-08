// src/components/PortfolioContainer.js
import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onSell }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map(stock => (
        <Stock
          key={stock.id}
          stock={stock}
          onSell={onSell}
          inPortfolio={true}
        />
      ))}
    </div>
  );
}

export default PortfolioContainer;
