export interface AssetData {
  iconFileName: string;
  name: string;
  shortName: string;
  currency: string;
  price: string;
  pricePercentageChange: number;
  totalValueLocked: string;
  popularPairs: Array<{
    assetIconFileName: string;
  }>;
}

export const assetsData: Array<AssetData> = [
  {
    iconFileName: "bitcoin",
    name: "Bitcoin",
    shortName: "BTC",
    currency: "$",
    price: "31,812.80",
    pricePercentageChange: -10,
    totalValueLocked: "60,000",
    popularPairs: [
      { assetIconFileName: "solana" },
      { assetIconFileName: "ethereum" },
      { assetIconFileName: "binance-usd" },
    ],
  },
  {
    iconFileName: "solana",
    name: "Solana",
    shortName: "SOL",
    currency: "$",
    price: "32.83",
    pricePercentageChange: -12.32,
    totalValueLocked: "60,000",
    popularPairs: [
      { assetIconFileName: "bitcoin" },
      { assetIconFileName: "ethereum" },
      { assetIconFileName: "binance-usd" },
    ],
  },
  {
    iconFileName: "ethereum",
    name: "Ethereum",
    shortName: "ETH",
    currency: "$",
    price: "1,466.45",
    pricePercentageChange: -11.93,
    totalValueLocked: "60,000",
    popularPairs: [
      { assetIconFileName: "solana" },
      { assetIconFileName: "bitcoin" },
      { assetIconFileName: "binance-usd" },
    ],
  },
  {
    iconFileName: "binance-usd",
    name: "Binance USD",
    shortName: "BUSD",
    currency: "$",
    price: "1.00",
    pricePercentageChange: 0.26,
    totalValueLocked: "60,000",
    popularPairs: [
      { assetIconFileName: "solana" },
      { assetIconFileName: "ethereum" },
      { assetIconFileName: "binance-usd" },
    ],
  },
  {
    iconFileName: "shiba-inu",
    name: "Shiba Inu",
    shortName: "SHIB",
    currency: "$",
    price: "0.00000001948",
    pricePercentageChange: -8.1,
    totalValueLocked: "60,000",
    popularPairs: [
      { assetIconFileName: "solana" },
      { assetIconFileName: "ethereum" },
      { assetIconFileName: "binance-usd" },
    ],
  },
];
