export default function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_POINTS":
      return {
        ...state,
        totalScore: state.totalScore + payload
      };
    default:
      return state;
  }
}
