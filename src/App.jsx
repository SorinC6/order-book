import React, { useContext, useReducer, useEffect } from "react";
import Context from "./context";
import reducer from "./reducer";
import OrderBook from "./components/OrderBook";
import Trades from "./components/Trades";
import Layout from "./components/common/Layout";
import axios from "axios";
import data from "./dummyData";

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  //console.log(state);

  const count = "Limit";

  useEffect(() => {
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "x-csrftoken";
    axios
      .get("https://api.kraken.com/0/public/Depth?pair=ETHUSD", {
        headers: {
          // "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Origin": "*"
          // crossDomain: true
        }
      })
      .then(res => {
        debugger;
      })
      .catch(err => {
        console.log(err);
      });
    //performSignIn();

    dispatch({ type: "FETCH_BIDS", payload: data.bids });
    dispatch({ type: "FETCH_ASKS", payload: data.asks });
  }, []);

  function performSignIn() {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://localhost:3000");

    fetch("http://api.kraken.com/0/public/Depth?pair=ETHUSD", {
      // mode: "no-cors",
      credentials: "include",
      method: "GET",
      headers: headers
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log("ERROR ", error));
  }

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
