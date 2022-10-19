import React from "react";
import "./App.css";

function App() {
  return (
    <div className="group relative asset-container bg-blue-dark">
      <div className="h-80 bg-blue-light rounded-xl asset-card">
        <div className="asset-icon">
          <img alt="bitcoin" src={require("./assets/bitcoin.png")} />
        </div>
        <div className="asset-content"></div>
      </div>
      <div className="h-80 bg-blue-light rounded-xl asset-card">
        <div className="asset-icon">
          <img alt="solana" src={require("./assets/solana.png")} />
        </div>
        <div className="asset-content"></div>
      </div>
      <div className="h-80 bg-blue-light rounded-xl asset-card">
        <div className="asset-icon">
          <img alt="ethereum" src={require("./assets/ethereum.png")} />
        </div>
        <div className="asset-content"></div>
      </div>
      <div className="h-80 bg-blue-light rounded-xl asset-card">
        <div className="asset-icon">
          <img alt="binance-usd" src={require("./assets/binance-usd.png")} />
        </div>
        <div className="asset-content"></div>
      </div>
      <div className="h-80 bg-blue-light rounded-xl asset-card">
        <div className="asset-icon">
          <img alt="shiba-inu" src={require("./assets/shiba-inu.png")} />
        </div>
        <div className="asset-content"></div>
      </div>
    </div>
  );
}

export default App;
