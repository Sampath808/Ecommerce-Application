import "./index.css";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./state/cartSlice";

function Card({ product }) {
  const dispatch = useDispatch();

  const handleCartButton = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <div className="card">
        <img
          src={product.imgUrl}
          alt={product.name}
          className="rounded"
          width="250"
          height="250"
        ></img>
        <p>{product.name}</p>
        <p>{product.priceTag}</p>
        <button
          onClick={() => handleCartButton(product)}
          type="button"
          className="btn btn-warning "
        >
          Add to cart
        </button>
      </div>
    </>
  );
}
export default Card;
