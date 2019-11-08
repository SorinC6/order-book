import { createContext } from "react";

const context = createContext({
  bids: [],
  asks: [],
  trades: [],
  count: "Limit",
  loading: false
});

export default context;
