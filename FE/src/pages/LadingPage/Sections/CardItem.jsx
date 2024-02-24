import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../../../components/ImageSlider";

const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CardItem = ({ product }) => {
  const formattedPrice = numberWithCommas(product.price);
  return (
    <div className="my-14">
      <Link to={`/product/${product._id}`}>
        <ImageSlider images={product.images} />
        <p className="my-5">{product.title}</p>
        <p className="mb-5 text-sm text-neutral-500">{product.continents}</p>
        <hr className="border-neutral-400" />
        <p className="text-xl mt-2">{formattedPrice}</p>
      </Link>
    </div>
  );
};

export default CardItem;
