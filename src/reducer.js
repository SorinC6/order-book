export default function reducer(state, { type, payload }) {
  switch (type) {
    case "FETCH_ASKS":
      return {
        ...state,
        asks: payload
          .map(item => {
            return [...item, parseInt(item[1])];
          })
          .sort((a, b) => a[1] - b[1])
      };
    case "FETCH_BIDS":
      return {
        ...state,
        bids: payload
          .map(item => {
            return [...item, parseInt(item[1])];
          })
          .sort((a, b) => b[1] - a[1])
      };
    case "FETCH_TRADES":
      return {
        ...state,
        trades: payload
      };
    case "SET_COUNT":
      return {
        ...state,
        count: payload
      };
    case "START_LOADING_ORDERS":
      return {
        ...state,
        loadingOrder: true
      };
    case "STOP_LOADING_ORDERS":
      return {
        ...state,
        loadingOrder: false
      };
    case "START_LOADING_TRADES":
      return {
        ...state,
        loadingTrades: true
      };
    case "STOP_LOADING_TRADES":
      return {
        ...state,
        loadingTrades: false
      };
    default:
      return state;
  }
}
