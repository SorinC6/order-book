import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import Context from "./context";
import reducer from "./reducer";
import OrderBook from "./components/OrderBook";
import Trades from "./components/Trades";
import Layout from "./components/common/Layout";
import SidePannel from "./components/SidePannel";
import data from "./dummyData";

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  //console.log(state);

  const count = "Limit";

  useEffect(() => {
    axios
      .get(`https://api.kraken.com/0/public/Depth?pair=ETHUSD&count=${count}`)
      .then(res => {
        //console.log(res.data.result.XETHZUSD);
        const { asks } = res.data.result.XETHZUSD;
        const { bids } = res.data.result.XETHZUSD;
        dispatch({ type: "FETCH_BIDS", payload: bids });
        dispatch({ type: "FETCH_ASKS", payload: asks });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Context.Provider value={{ state, dispatch }}>
        <Layout>
          <SidePannel />
          <OrderBook />
          <Trades />
        </Layout>
      </Context.Provider>
    </div>
  );
}

export default App;
