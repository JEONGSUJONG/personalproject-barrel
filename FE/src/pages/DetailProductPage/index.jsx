import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import ProductImg from "./Sections/ProductImg";
import ProductInfo from "./Sections/ProductInfo";

const DetailProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axiosInstance.get(
          `/products/${productId}?type=single`
        );
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, [productId]);

  return (
    <section className="w-[75vw] py-[20vh] p-4">
      {product && (
        <>
          <div className="flex">
            <div className="w-[60%]">
              <ProductImg product={product} />
            </div>

            <div className="w-[40%]">
              <ProductInfo product={product} />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default DetailProductPage;
