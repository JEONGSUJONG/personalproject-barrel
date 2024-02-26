import React from 'react'

const BestItem = () => {
  return (
    <div className="flex gap-[100px] justify-center items-center mt-14">
      <div className="relative overflow-hidden">
        <img
          src="/women.jpg"
          alt="women"
          className="hover:scale-105 duration-1000"
        />
        <div className="absolute bottom-0 w-full h-[80px] bg-white opacity-80 flex justify-center items-center">
          <p className="text-center font-bold text-2xl">WOMEN</p>
        </div>
      </div>

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
  );
}

      <div className="relative overflow-hidden ">
        <div className="hover:scale-105 hover:text-white duration-1000">
          <img src="/link1.jpg" alt="link1" className="hover:brightness-50" />
          <div className="absolute top-1/3 pl-[100px]">
            <div className="text-2xl font-bold">
              <p>스티치 컬러 배색과</p>
              <p>심플한 기본 로고 포인트</p>
            </div>
            <p className="my-2">우먼 에센셜 컬러배색 Y백 원피스 수영복</p>
          </div>
        </div>
      </div>;

export default BestItem