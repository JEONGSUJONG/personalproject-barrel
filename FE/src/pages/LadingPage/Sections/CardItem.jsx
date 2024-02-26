import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "../../../components/LikeButton";

const CardItem = ({ product }) => {
  const thumbnail = `${import.meta.env.VITE_SERVER_URL}/${product.images[0]}`;

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formattedPrice = numberWithCommas(product.price);

  return (
    <div className="my-14 relative">
      <Link to={`/product/${product._id}`}>
        <img src={thumbnail} alt={product.title} />
      </Link>
      <div className="absolute bottom-[28%] right-[8%]">
        <LikeButton
          productId={product._id}
        />
      </div>
      <p className="my-5">{product.title}</p>
      <p className="mb-5 text-sm text-neutral-500">{product.continents}</p>
      <hr className="border-neutral-400" />
      <p className="text-xl mt-2">{formattedPrice}</p>
    </div>
  );
};

export default CardItem;
