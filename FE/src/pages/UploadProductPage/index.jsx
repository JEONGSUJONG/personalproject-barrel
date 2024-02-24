import React, { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import FileUpload from "../../components/FileUpload";

const continents = [
  { key: 1, value: "Man" },
  { key: 2, value: "Woman" },
  { key: 3, value: "Shoes" },
];

const UploadProductPage = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    continents: 1,
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
    <section className="w-full my-[100px]">
      <div className="flex justify-center text-center text-4xl">
        <h1>상품 등록</h1>
      </div>

      <form className="my-10" onSubmit={handleSubmit}>
        <div className="flex justify-center mt-[25px]">
          {/* 이름, 설명 */}
          <div className="w-[45%] pl-10">
            {/* 이름 */}
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
              <label htmlFor="continents" className="font-bold">
                CATEGORY
              </label>
              <select
                className="w-full border-2 mt-2 mb-10"
                name="continents"
                id="continents"
                onChange={handleChange}
                value={product.continents}
              >
                {continents.map((item) => (
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
              <label htmlFor="description" className="font-bold">
                COLOR
              </label>
              <input
                className="w-full border-2 mt-2 mb-10"
                name="description"
                id="description"
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label htmlFor="continents" className="font-bold">
                SIZE
              </label>
              <select
                className="w-full border-2 mt-2 mb-10"
                name="continents"
                id="continents"
                onChange={handleChange}
              >
                {continents.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <FileUpload images={product.images} onImageChange={handleImages} />
      </form>

      <div className="mt-4 text-center">
        <button
          type="submit"
          className="bg-black text-white py-2 rounded px-6 hover:bg-gray-700 ease-in-out"
        >
          CREATE
        </button>
      </div>
    </section>
  );
};

export default UploadProductPage;
