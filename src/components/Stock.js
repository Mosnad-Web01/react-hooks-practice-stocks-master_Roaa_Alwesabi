// src/components/Stock.js
import React from "react";

function Stock({ stock, onBuy, onSell, inPortfolio }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.ticker}</h5>
          <p className="card-text">Price: ${stock.price}</p>
          {onBuy && !inPortfolio && <button onClick={() => onBuy(stock)}>Buy</button>}
          {onSell && inPortfolio && <button onClick={() => onSell(stock)}>Sell</button>}
        </div>
      </div>
    </div>
  );
}

export default Stock;
