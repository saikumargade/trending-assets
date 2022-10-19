import React from "react";
import "./App.css";
import AssetCard from "./components/AssetCard";
import { assetsData } from "./data";

function App() {
  return (
    <div className="group relative asset-container bg-blue-dark">
      {assetsData.map((assetDetails) => (
        <AssetCard assetDetails={assetDetails} />
      ))}
    </div>
  );
}

export default App;
