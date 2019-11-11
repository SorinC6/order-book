import React, { useContext, useReducer, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import Context from "./context";
// import appTheme from "./util/appTheme";
import reducer from "./reducer";
import OrderBook from "./components/OrderBook";
import Trades from "./components/Trades";
import Layout from "./components/common/Layout";
import SidePannel from "./components/SidePannel";

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  const theme = {
    primary: "white",
    secondary: "#1C262D",
    mainBackground: "grey",
    boxShadow: "0px 4px 7px #777",
    headerBackground: "#2C3940",
    projectBackground: "",
    projectNav: "",
    contactBackground: "",
    contactNav: ""
  };

  useEffect(() => {
    dispatch({ type: "START_LOADING_ORDERS" });
    axios
      .get(
        `https://api.kraken.com/0/public/Depth?pair=ETHUSD&count=${state.count}`
      )
      .then(res => {
        const { asks } = res.data.result.XETHZUSD;
        const { bids } = res.data.result.XETHZUSD;
        dispatch({ type: "FETCH_BIDS", payload: bids });
        dispatch({ type: "FETCH_ASKS", payload: asks });
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        dispatch({ type: "STOP_LOADING_ORDERS" });
      });
  }, [state.count]);

  useEffect(() => {
    dispatch({ type: "START_LOADING_TRADES" });
    axios.get(``);
    axios
      .get(
        `https://api.kraken.com/0/public/Trades?pair=ETHUSD&since=1571371200000`
      )
      .then(res => {
        const data = res.data.result.XETHZUSD;
        dispatch({ type: "FETCH_TRADES", payload: data });
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        dispatch({ type: "STOP_LOADING_TRADES" });
      });
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Context.Provider value={{ state, dispatch }}>
          <Layout>
            <SidePannel />
            <OrderBook />
            <Trades />
          </Layout>
        </Context.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
