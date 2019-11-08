import React, { useState } from "react";

const useDropdown = (label, defaultState, option) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          onChange={e => setState(e.target.value)}
          onBlur={e => setState(e.target.value)}
          disabled={!option.length}
        >
          {/* <option>Limit</option> */}
          {option &&
            option.map(item => (
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
