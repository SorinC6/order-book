import React, { useContext, useEffect } from "react";
import Context from "../context";
import useDropdown from "./common/useDropdown";

const data = ["Limit", 1, 2, 3, 4, 5];

const Dropdown = () => {
  const [count, DropdownComponent, setCount] = useDropdown(
    "COUNT",
    "Limit",
    data
  );
  const { state, dispatch } = useContext(Context);
  // console.log("STATE", state.count);

  useEffect(() => {
    dispatch({ type: "SET_COUNT", payload: count });
  }, [count, dispatch]);

  //console.log(count);

  return <DropdownComponent />;
};

export default Dropdown;
