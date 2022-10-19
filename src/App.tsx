import React from "react";
import "./App.css";
import AssetCard from "./components/AssetCard";
import { assetsData } from "./data";

function App() {
  return (
    <div className="body bg-blue-dark">
      <p className="amount pt-48 pl-14"> Trending Assets</p>
      <div className="group relative asset-container">
        {assetsData.map((assetDetails) => (
          <AssetCard assetDetails={assetDetails} />
        ))}
      </div>
    </div>
  );
}

export default App;
