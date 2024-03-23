import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axios";
import { category } from "../../utils/filterData";

const LikePage = () => {
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    const fetchLikedProducts = async () => {
      try {
        const response = await axiosInstance.get("/like/liked");
        setLikedProducts(response.data.likedProducts);
      } catch (error) {
        console.error("Error fetching liked products:", error);
      }
    };

    fetchLikedProducts();
  }, []);

  const getCategoryName = (categoryId) => {
    const foundCategory = category.find((c) => c._id === categoryId);
    return foundCategory ? foundCategory.name : "";
  };

  return (
    <div className="text-center my-[120px]">
      <h2 className="text-2xl my-4">좋아요 목록</h2>

      {likedProducts.length > 0 ? (
        <section className="w-[900px] flex flex-wrap">
          {likedProducts.map((liked) => (
            <div key={liked._id} className="w-1/3 p-4">
              <img
                src={`${import.meta.env.VITE_SERVER_URL}/${
                  liked.product.images[0]
                }`}
                alt={liked.product.title}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="mt-4">
                <p className="text-lg font-bold text-left">
                  {liked.product.title}
                </p>
                <p className="mt-2 text-gray-500 text-xs text-left">
                  {getCategoryName(liked.product.category)}
                </p>
                <p className="mt-4 text-left">{liked.product.price} 원</p>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <p>텅~</p>
      )}
    </div>
  );
};

export default LikePage;
