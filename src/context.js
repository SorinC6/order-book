import { createContext } from "react";

const context = createContext({
  bids: [],
  asks: [],
  trades: [],
  count: "Limit",
  loadingOrder: false,
  loadingTrades: false
});

export default context;
