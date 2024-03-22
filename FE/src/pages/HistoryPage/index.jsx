import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const HistoryPage = () => {
  const userData = useSelector((state) => state.user?.userData);

  return (
    <section className="my-[120px] h-auto">
      <div className="text-center">
        <h2 className="text-2xl">나의 주문목록</h2>
      </div>

      <table className="mt-10 w-[900px] text-sm text-left text-gray-500">
        <thead className="border-[1px]">
          <tr>
            <th>구매 아이디</th>
            <th>이름</th>
            <th>가격</th>
            <th>개수</th>
            <th>구매일</th>
          </tr>
        </thead>
        <tbody>
          {userData?.history ? (
            userData.history.map((item) => (
              <tr className="border-b" key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price * item.quantity}</td>
                <td>{item.quantity}</td>
                <td>
                  {dayjs(item.dateOfPurchase).format("YYYY-MM-DD HH:mm:ss")}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                주문 내역이 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default HistoryPage;
