import React, { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import FileUpload from "../../components/FileUpload";

const category = [
  { key: 1, value: "MEN" },
  { key: 2, value: "WOMEN" },
  { key: 3, value: "ACCESSORIES" },
];

const UploadProductPage = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: 1,
    price: 0,
    color: "", // color 추가
    size: "", // size 추가
    images: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImages = (newImages) => {
    setProduct((prevState) => ({
      ...prevState,
      images: newImages,
    }));
  };

  const userData = useSelector((state) => state.user?.userData);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
      writer: userData.id,
      ...product,
    };

    try {
      await axiosInstance.post("/products", body);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="w-full mt-[100px]">
      <div className="flex justify-center text-center text-4xl">
        <h1>상품 등록</h1>
      </div>

      <form className="my-10" onSubmit={handleSubmit}>
        <div className="flex justify-center mt-[25px]">
          <div className="w-[45%] pl-10">
            <div className="">
              <label htmlFor="title" className="font-bold">
                TITLE
              </label>
              <input
                className="w-full border-2 mt-2 mb-10"
                name="title"
                id="title"
                onChange={handleChange}
                value={product.title}
              />
            </div>

            <div className="">
              <label htmlFor="description" className="font-bold">
                DESCRIPTION
              </label>
              <input
                className="w-full border-2 mt-2 mb-10"
                name="description"
                id="description"
                onChange={handleChange}
                value={product.description}
              />
            </div>

            <div className="">
              <label htmlFor="category" className="font-bold">
                {" "}
                {/* continents -> category로 수정 */}
                CATEGORY
              </label>
              <select
                className="w-full border-2 mt-2 mb-10"
                name="category"
                id="category"
                onChange={handleChange}
                value={product.category}
              >
                {/* continents -> category로 수정 */}
                {category.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-[45%] pl-10">
            <div>
              <label htmlFor="price" className="font-bold">
                PRICE
              </label>
              <input
                className="w-full border-2 mt-2 mb-10"
                type="number"
                name="price"
                id="price"
                onChange={handleChange}
                value={product.price}
              />
            </div>

            <div className="">
              <label htmlFor="color" className="font-bold">
                {" "}
                {/* description -> color로 수정 */}
                COLOR
              </label>
              <input
                className="w-full border-2 mt-2 mb-10"
                name="color"
                id="color"
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label htmlFor="size" className="font-bold">
                SIZE
              </label>
              <select
                className="w-full border-2 mt-2 mb-10"
                name="size"
                id="size"
                onChange={handleChange}
                value={product.size}
              >
                <option value="">One Size</option>
                {/* 80부터 110까지 5씩 증가하는 옵션 생성 */}
                {Array.from({ length: 7 }, (_, index) => {
                  const size = 80 + index * 5;
                  const sizeString = size.toString().padStart(3, "0");
                  return (
                    <option key={index} value={sizeString}>
                      {sizeString}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <FileUpload images={product.images} onImageChange={handleImages} />

        <div className="mt-4 text-center">
          <button
            type="submit"
            className="bg-black text-white py-2 rounded px-6 hover:bg-gray-700 ease-in-out my-10"
          >
            CREATE
          </button>
        </div>
      </form>
    </section>
  );
};

export default UploadProductPage;
