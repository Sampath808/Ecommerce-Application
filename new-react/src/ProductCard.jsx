import "./index.css";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./state/cartSlice";

function ProductCard({ product, items }) {
  const dispatch = useDispatch();
  const arr = items.filter((i) => i.productId === product.productId);
  const cartItem = arr.length > 0 ? arr[0] : undefined;
  const handleCartButton = (product) => {
    dispatch(
      addToCart(1, product.productId, cartItem ? cartItem.quantity + 1 : 1)
    );
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
        {!cartItem || cartItem.quantity == 0 ? (
          <button
            onClick={() => handleCartButton(product)}
            type="button"
            className="btn btn-warning "
          >
            Add to cart
          </button>
        ) : (
          <p>Quantity : {cartItem.quantity}</p>
        )}
      </div>
    </>
  );
}
export default ProductCard;
