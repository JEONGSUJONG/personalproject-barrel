import React from "react";
import { category } from "../../../utils/filterData";

const CartTable = ({ products, onRemoveItem }) => {
  const getCategoryName = (categoryId) => {
    const foundCategory = category.find((c) => c._id === categoryId);
    return foundCategory ? foundCategory.name : "";
  };

  const renderItems =
    products.length > 0 &&
    products.map((item) => (
      <tr key={item._id}>
        <td>
          <img
            src={`${import.meta.env.VITE_SERVER_URL}/${item.images[0]}`}
            alt=""
            style={{ width: "100px", height: "auto" }}
          />
        </td>
        <td>{item.title}</td>
        <td>{getCategoryName(item.category)}</td>
        <td>{item.quantity} 개</td>
        <td>{item.price} 원</td>
        <td>
          <button onClick={() => onRemoveItem(item._id)}>지우기</button>
        </td>
      </tr>
    ));

  return (
    <table className="w-[1000px] text-md text-left text-gray-500">
      <thead className="border-[1px]">
        <tr>
          <th>사진</th>
          <th>이름</th>
          <th>카테고리</th>
          <th>개수</th>
          <th>가격</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody className="border-[1px]">{renderItems}</tbody>
    </table>
  );
};

export default CartTable;
