import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = ({ onSearch, searchTerm }) => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <CiSearch className="text-2xl text-gray-500" />
        </div>
        <input
          className="p-2 pl-10 border border-gray-400 rounded-md"
          type="text"
          placeholder="Search"
          onChange={onSearch}
          value={searchTerm}
        />
      </div>
    </div>
  );
};

export default SearchInput;
