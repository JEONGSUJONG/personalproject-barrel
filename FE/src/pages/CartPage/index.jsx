import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from '../../store/thunkFunction';

const CartPage = () => {
  const userData = useSelector(state => state.user?.userDate);
  const dispatch = useDispatch();
  useEffect(() => {
    let cartItemIds = []
    if (userData?.cart && userData.cart.length > 0) {
      userData.cart.forEach((item) => {
        cartItemIds.push(item.id);
      })
      const body = {
        cartItemIds,
        userCart: userData.cart
      }
      dispatch(getCartItems(body));
    }
  }, [dispatch, userData])
  return <div>CartPage</div>;
}

export default CartPage;