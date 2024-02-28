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
    dispatch(addToCart({ productId: product._id }))
  }

  return (
    <div className="p-6 ml-4 my-14">
      <div className="text-3xl font-bold">{product.title}</div>
      <div className="mt-10 flex justify-between items-center">
        <div className="uppercase">{product.color}</div>
        <LikeButton
          productId={product._id}
          initialLiked={product.isLiked}
        />
      </div>
      <hr className="my-10" />
      <div className="mb-2">
        <span className="font-bold text-3xl">
          {numberWithCommas(product.price)}
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

      <div className="mt-16">
        <div className="flex justify-end text-sm text-gray-400 mb-2"><span>SOLDED:{product.sold},</span><span>LIKED:{product.likeCount}</span></div>
        <button
          onClick={handleClick}
          className="w-full px-2 py-2 bg-black text-white rounded-md"
        >
          장바구니로
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
