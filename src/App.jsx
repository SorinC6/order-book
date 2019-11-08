import React, { useContext, useReducer } from "react";
import Context from "./context";
import reducer from "./reducer";
import OrderBook from "./components/OrderBook";
import Trades from "./components/Trades";
import Layout from "./components/common/Layout";

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Context.Provider value={{ state, dispatch }}>
        <Layout>
          <OrderBook />
          <Trades />
        </Layout>
      </Context.Provider>
    </div>
  );
}

export default App;
