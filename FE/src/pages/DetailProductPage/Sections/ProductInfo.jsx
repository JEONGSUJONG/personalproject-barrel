import React from "react";
import LikeButton from "../../../components/LikeButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/thunkFunction";

const colorURL = [
  { url: "/deepgreen.gif" },
  { url: "/black.jpg" },
  { url: "/yellow.jpg" },
  { url: "/pink.jpg" },
  { url: "/red.jpg" },
  { url: "/gray.jpg" },
];

const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductInfo = ({ product }) => {
  const colorIndex = 0;
  const dispatch = useDispatch();
  const handleClick = () => {
<<<<<<< HEAD
    dispatch(addToCart({ productId: product._id }));
=======
    dispatch(addToCart({ productId: product[0]._id }));
>>>>>>> 88431635c01c0ed4015e10dcfa334493ee0b1fdf
  };

  return (
    <div className="p-6 ml-4 mb-14">
      <div className="text-3xl font-bold">{product[0].title}</div>
      <div className="mt-10 flex justify-between items-center">
<<<<<<< HEAD
        <div className="uppercase">{product.color}</div>
        <LikeButton productId={product._id} initialLiked={product.isLiked} />
=======
        <div className="uppercase">{product[0].color}</div>
        <LikeButton
          productId={product[0]._id}
          initialLiked={product[0].isLiked}
        />
>>>>>>> 88431635c01c0ed4015e10dcfa334493ee0b1fdf
      </div>
      <hr className="my-10" />
      <div className="mb-2">
        <span className="font-bold text-3xl">
          {numberWithCommas(product[0].price)}
        </span>{" "}
        원
      </div>
      <hr className="my-10" />
      <div className="mb-6">
        <div className="mb-2 text-sm">COLOR</div>
        <div className="flex">
          <img
            src={colorURL[colorIndex].url}
            alt={`Color ${colorIndex}`}
            className="mr-2 w-20"
          />
        </div>
      </div>
      <div className="my-12">
        <div className="mb-2 text-sm">SIZE</div>
        <div className="flex">
          <div className="w-20 h-12 border-2 border-black flex justify-center items-center mr-2">
            080
          </div>
          <div className="w-20 h-12 border-2 border-black flex justify-center items-center">
            085
          </div>
        </div>

        <hr className="my-10 border-2 border-black" />
      </div>
<<<<<<< HEAD
      <p className="text-sm text-gray-300">SOLDED: {product.sold}개</p>
      <p className="text-sm text-gray-300">LIKES: {product.sold}개 </p>
      <p className="text-sm text-gray-300">
        DESCRIPTION: {product.description}
      </p>
      <div className="mt-10">
        <button
          onClick={handleClick}
          className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-700"
=======

      <div className="mt-16">
        <div className="flex justify-end text-sm text-gray-400 mb-2">
          <span>SOLDED:{product[0].sold},</span>
          <span>LIKED:{product[0].likeCount}</span>
        </div>
        <button
          onClick={handleClick}
          className="w-full px-2 py-2 bg-black text-white rounded-md"
>>>>>>> 88431635c01c0ed4015e10dcfa334493ee0b1fdf
        >
          장바구니로
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
