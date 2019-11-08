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
    case "START_LOADING":
      return {
        ...state,
        loading: true
      };
    case "STOP_LOADING":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
