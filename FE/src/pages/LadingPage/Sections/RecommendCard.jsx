import React from "react";

const RecommendCard = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="w-1/2 relative overflow-hidden ">
          <div className="w-full hover:scale-105 hover:text-white duration-1000">
            <img src="/link1.jpg" alt="link1" className="hover:brightness-50" />
            <div className="absolute top-1/3 pl-[100px]">
              <div className="text-2xl font-bold">
                <p>스티치 컬러 배색과</p>
                <p>심플한 기본 로고 포인트</p>
              </div>
              <p className="my-2">우먼 에센셜 컬러배색 Y백 원피스 수영복</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative overflow-hidden ">
          <div className="w-full hover:scale-105 hover:text-white duration-1000">
            <img src="/link2.jpg" alt="link2" className="hover:brightness-50" />
            <div className="absolute top-1/3 pl-[100px]">
              <div className="text-2xl font-bold">
                <p>심플한 컬러가 매력적인</p>
                <p>가장 베이직한 베스트셀러</p>
              </div>
              <p className="my-2">맨 에센셜 4부 워터 쇼츠</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="hover:scale-105 hover:text-white duration-1000">
          <img src="/link3.jpg" alt="link3" className="hover:brightness-50" />
          <div className="absolute top-1/3 pl-[300px]">
            <div className="text-2xl font-bold">
              <p>캐주얼하고 스포티한</p>
              <p>스티치 포인트의 브라탑</p>
            </div>
            <p className="my-2">우먼 에센셜 스티치 브라탑</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendCard;
