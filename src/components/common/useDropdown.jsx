import React, { useState } from "react";
import styled from "styled-components";

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

const Options = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  background: #fff;
  line-height: 1.5rem;
  margin-top: 10px;
  padding: 10px 10px;
  width: ${({ width }) => width || "200px"};
  max-width: 100%;
  color: #bfc1c4;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  border: 1px solid #eaeaea;
  z-index: 5;
  .label {
    &:hover {
      color: #2b303a;
      transition: 0.5s;
    }
  }
`;

const Op = styled.div`
  display: flex;
  flex-direction: column;
`;
