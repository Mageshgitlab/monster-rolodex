import React from "react";
import "./searchBox.css";

export const SearchBox = ({ placeholder, handlerChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handlerChange}
  ></input>
);
