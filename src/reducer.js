export default function reducer(state, { type, payload }) {
  switch (type) {
    case "FETCH_ASKS":
      return {
        ...state,
        asks: payload
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
    default:
      return state;
  }
}
