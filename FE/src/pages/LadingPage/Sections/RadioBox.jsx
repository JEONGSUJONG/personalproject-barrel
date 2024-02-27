import React from "react";

const RadioBox = ({ prices, checkedPrice, onFilters }) => {
  return (
    <div className="pl-14 my-8">
      <p className="px-3 pt-3 font-bold text-xl">PRICE</p>
      <hr className="w-10/12 my-4" />
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
