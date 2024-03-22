import React from "react";

const ProductImg = ({ product }) => {
  return (
    <div className="flex flex-wrap">
      {product[0].images.map((image, index) => (
        <div key={index} className="w-[50%] p-1">
          <img
            src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
            alt=""
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductImg;
