import "./index.css";
import React from "react";
function Card({ product, source }) {
  return (
    <>
      <div className="card">
        <img
          src={source}
          alt={product.name}
          className="rounded"
          width="250"
          height="250"
        ></img>
        <p>{product.name}</p>
        <p>{product.priceTag}</p>
        <button type="button" className="btn btn-warning">
          Add to cart
        </button>
      </div>
    </>
  );
}
export default Card;
