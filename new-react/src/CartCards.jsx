import React from "react";
import { useSelector } from "react-redux";

const CartCards = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.productId}>{item.name}</li>
        ))}
      </ul>
      <div>
        <strong>Total Quantity:</strong> {cart.totalItems}
      </div>
      <div>
        <strong>Total Amount:</strong> ${cart.totalAmount}
      </div>
    </div>
  );
};

export default CartCards;
