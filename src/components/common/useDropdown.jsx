import React, { useState } from "react";
import { setState } from "expect/build/jestMatchersObject";

const useDropdown = (label, defaultState, option) => {
  const [state, useState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          onChange={e => setState(e.target.value)}
          onBlur={e => e.target.value}
        >
          {option.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    );
  };

  return [state, Dropdown, setState];
};

export default useDropdown;
