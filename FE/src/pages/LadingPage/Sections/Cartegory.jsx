import React from "react";

const Cartegory = ({ category, products }) => {
  const handleCategory = () => {};

  return (
    <div className="w-full flex justify-center">
      <div className="w-5/6">
        <div className="flex gap-[100px] mt-14">
          <button onClick={handleCategory} className="relative overflow-hidden">
            <img
              src="/women.jpg"
              alt="women"
              className="hover:scale-105 duration-1000"
            />
            <div className="absolute bottom-0 w-full h-[80px] bg-white opacity-80 flex justify-center items-center">
              <p className="text-center font-bold text-2xl">WOMEN</p>
            </div>
          </button>

          <div className="relative overflow-hidden">
            <img
              src="/men.jpg"
              alt="men"
              className="hover:scale-105 duration-1000"
            />
            <div className="absolute bottom-0 w-full h-[80px] bg-white opacity-80 flex justify-center items-center">
              <p className="text-center font-bold text-2xl">MEN</p>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              src="/accessories.jpg"
              alt="accessories"
              className="hover:scale-105 duration-1000"
            />
            <div className="absolute bottom-0 w-full h-[80px] bg-white opacity-80 flex justify-center items-center">
              <p className="text-center font-bold text-2xl">ACCESSORIES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartegory;
