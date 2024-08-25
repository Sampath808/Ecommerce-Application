import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const CartCards = () => {
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );

  return (
    <div>
      <h2>Your Cart</h2>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Total Quantity:</strong> {totalQuantity}
      </div>
      <div>
        <strong>Total Amount:</strong> ${totalAmount}
      </div>
    </div>
  );
};

export default CartCards;
