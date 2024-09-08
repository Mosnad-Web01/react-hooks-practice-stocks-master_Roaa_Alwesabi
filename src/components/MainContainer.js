import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ onSortChange, onFilterChange, onBuyStock, onSellStock, portfolio, sortType, filterType }) {
  return (
    <div>
      <SearchBar onSortChange={onSortChange} onFilterChange={onFilterChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer
            onBuy={onBuyStock}
            portfolio={portfolio}
            sortType={sortType}
            filterType={filterType}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onSell={onSellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
