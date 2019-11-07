import { createContext } from "react";

const context = createContext({
  bids: [],
  asks: [],
  trades: []
});

export default context;
