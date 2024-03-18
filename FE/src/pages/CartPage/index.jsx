import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItems,
  payProducts,
  removeCartItem,
} from "../../store/thunkFunction";
import CartTable from "./Section/CartTable";

const CartPage = () => {
  const userData = useSelector((state) => state.user?.userData);
  const cartDetail = useSelector((state) => state.user?.cartDetail);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let cartItemIds = [];
    if (userData?.cart && userData.cart.length > 0) {
      userData.cart.forEach((item) => {
        cartItemIds.push(item.id);
      });
      const body = {
        cartItemIds,
        userCart: userData.cart,
      };
      dispatch(getCartItems(body));
    }
  }, [dispatch, userData]);

  useEffect(() => {
    totalPrice(cartDetail);
  }, [cartDetail]);

  const totalPrice = (cartItems) => {
    let total = 0;
    cartItems.map((item) => (total += item.price * item.quantity));
    setTotal(total);
  };

  const handleRemoveCartItem = (productId) => {
    dispatch(removeCartItem(productId));
  };

  const handlePaymentClick = () => {
    dispatch(payProducts({ cartDetail }));
  };

  return (
    <section className="h-[100vh] mt-[120px] mb-[120px]">
      <div className="text-center m-7">
        <h2 className="text-2xl">나의 장바구니</h2>
      </div>
      {cartDetail?.length > 0 ? (
        <>
          <CartTable
            products={cartDetail}
            onRemoveItem={handleRemoveCartItem}
          />
          <div className="mt-10 flex justify-between items-center">
            <div>
              <p>
                <span className="font-bold">합계 : </span>
                {total} 원
              </p>
            </div>
            <button
              className="px-8 py-2 text-white bg-black rounded-md hover:bg-gray-500"
              onClick={handlePaymentClick}
            >
              결제하기
            </button>
          </div>
        </>
      ) : (
        <p className="w-[1000px]">장바구니가 비었습니다.</p>
      )}
    </section>
  );
};

export default CartPage;
