'use client';
import React, { useState } from "react";
import {SearchManufacture} from "./";

const SearchBar = () => {
    const [manufacture, setManufacture] = useState('')
  const handleSubmit = () => {};
  return (
  <form className="searchbar" onSubmit={handleSubmit}>
    <div className="search__item">
        <SearchManufacture
            manufacture={manufacture}
        />
    </div>
  </form>
  );
};

export default SearchBar;
