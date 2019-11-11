import React, { useContext, useEffect } from "react";
import Context from "../context";
import useDropdown2 from "./common/useDropdown2";
import "../App.css";

import countData from "../countData";

const Dropdown = () => {
  const [selectedItem, Dropdown] = useDropdown2(countData);
  const { dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({ type: "SET_COUNT", payload: selectedItem });
  }, [selectedItem, dispatch]);

  return (
    <>
      <Dropdown />
    </>
  );
};

export default Dropdown;
