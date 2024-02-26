import React from "react";

const RadioBox = ({ prices, checkedPrice, onFilters }) => {
  return (
    <div className="h-[16vh] p-2 mb-3 border-2">
      {prices?.map((price) => (
        <div key={price._id}>
          <input
            checked={checkedPrice === price.array}
            onChange={(event) => onFilters(event.target.value)}
            type="radio"
            id={price._id}
            value={price._id}
          />{" "}
          <label htmlFor={price._id}>{price.name}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioBox;
