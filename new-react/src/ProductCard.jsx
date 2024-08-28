import "./index.css";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./state/cartSlice";

function ProductCard({ product, items }) {
  const dispatch = useDispatch();
  let cartItem = null;
  let quantity = null;

  if (items && items.length > 0) {
    const arr = items.filter((i) => i.product.productId === product.productId);
    cartItem = arr.length > 0 ? arr[0] : undefined;
  }
  const handleCartButton = (product) => {
    if (items && items.length > 0) {
      quantity = cartItem ? cartItem.quantity + 1 : 1;
    } else {
      quantity = 1;
    }
    dispatch(
      addToCart({ customerId: 1, productId: product.productId, quantity })
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
        {cartItem == null || cartItem.quantity == 0 ? (
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
