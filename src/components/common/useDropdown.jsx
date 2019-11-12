import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const useDropdown = items => {
  const [showItems, setShowItem] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const dropdownHandler = () => {
    setShowItem(!showItems);
  };
  const handleSelect = item => {
    setSelectedItem(item);
    setShowItem(false);
  };

  const Dropdown = () => (
    <Root>
      <SelectedItem>
        <p>{selectedItem}</p>
      </SelectedItem>
      <Drop onClick={dropdownHandler}>
        {showItems ? <ArrowDown /> : <ArrowUP />}
      </Drop>
      <DropItems showItems>
        {showItems &&
          items.map(it => (
            <div
              key={it}
              onClick={() => handleSelect(it)}
              className={it === selectedItem ? "selected" : ""}
            >
              {it}
            </div>
          ))}
      </DropItems>
    </Root>
  );

  return [selectedItem, Dropdown];
};

useDropdown.propTypes = {
  items: PropTypes.array.isRequired
};

export default useDropdown;

const Root = styled.div`
  position: relative;
  width: 180px;
`;

const Drop = styled.div`
  width: 30px;
  height: 31px;
  margin: 0;
  padding: 0;
  display: flex;
  background: #aaa;
  position: absolute;
  right: 0;
  top: 0;
`;

const DropItems = styled.div`
  display: ${props => (props.showItems ? "block" : "none")};
  color: white;
  height: 300px;
  overflow: scroll;
  div {
    border-bottom: 1px solid grey;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    padding: 6px;
    padding-left: 20px;
    cursor: pointer;
    background-color: darkslateblue;

    &:hover {
      background: lightblue;
      color: black;
    }
  }
`;

const SelectedItem = styled.div`
  height: 30px;
  border: 1px solid #aaa;
  width: 100%;
  margin: 0;
  padding: 0;
  left: 5%;
  top: 10%;

  p {
    margin: 5px;
    margin-left: 10px;
  }
`;
const ArrowUP = styled.div`
  position: absolute;
  top: 10px;
  left: 8px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid #fff;
`;
const ArrowDown = styled.div`
  position: absolute;
  top: 12px;
  left: 8px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid #fff;
`;
