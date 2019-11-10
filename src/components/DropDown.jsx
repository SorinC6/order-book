import React, { useContext, useEffect } from "react";
import Context from "../context";
import useDropdown from "./common/useDropdown";
import countData from "../countData";

const Dropdown = () => {
  const [count, DropdownComponent, setCount] = useDropdown(
    "Select Limit",
    "Limit",
    countData
  );
  const { state, dispatch } = useContext(Context);
  //console.log(countData);

  useEffect(() => {
    dispatch({ type: "SET_COUNT", payload: count });
  }, [count, dispatch]);

  //console.log(count);

  return <DropdownComponent />;
};

export default Dropdown;
