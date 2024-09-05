import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { fetchCart } from "./state/cartSlice";

const CartList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.cart);
  const { customer } = useSelector((state) => state.customer);

  useEffect(() => {
    if (customer) {
      dispatch(fetchCart(customer.id));
    }
  }, [dispatch, customer]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading cart</div>;
  }

  return (
    <div>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <CartCard className="m-2" key={item.cartId} item={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default CartList;
