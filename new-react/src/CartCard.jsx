import React from "react";

function CartCard({ item }) {
  return (
    <div className="card">
      <p>{item.name}</p>
      <p>{item.priceTag}</p>
    </div>
  );
}

export default CartCard;
