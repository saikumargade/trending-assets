import React from "react";
import { AssetData } from "../data";

const AssetCard: React.FC<{ assetDetails: AssetData }> = ({
  assetDetails: {
    iconFileName,
    name,
    shortName,
    currency,
    price,
    pricePercentageChange,
    totalValueLocked,
    popularPairs,
  },
}) => {
  return (
    <div className="h-80 bg-blue-light rounded-xl asset-card">
      <div className="asset-icon">
        <img alt={name} src={require(`../assets/${iconFileName}.png`)} />
      </div>
      <div className="asset-content">
        <p className="text">{`${name} (${shortName})`}</p>
        <p className="amount-holder amount">
          {`${currency} ${price}`}&emsp;
          <span
            className={
              pricePercentageChange >= 0 ? "positive-change" : "negative-change"
            }
          >{`${pricePercentageChange}%`}</span>
        </p>
        <p className="text">Price</p>
        <p className="amount-holder amount mt-1">{`${currency} ${totalValueLocked}`}</p>
        <p className="text">TVL</p>
        <div className="popular-pairs flex justify-around ml-14 py-2 w-24">
          {popularPairs.map((asset) => (
            <img
              className="popular-pair-icon"
              alt={name}
              src={require(`../assets/${asset.assetIconFileName}.png`)}
            />
          ))}
        </div>
        <p className="text">Popular Pairs</p>
      </div>
    </div>
  );
};

export default AssetCard;
