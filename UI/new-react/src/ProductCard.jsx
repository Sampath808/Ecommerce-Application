import "./index.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/esm/Button";
import { updateCart } from "./state/cartSlice";

function ProductCard({ product, items }) {
  const dispatch = useDispatch();
  const { customer } = useSelector((state) => state.customer);

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
      updateCart({
        customerId: customer.id,
        productId: product.productId,
        quantity,
      })
    );
  };

  const handleIncrement = () => {
    dispatch(
      updateCart({
        customerId: customer.id,
        productId: product.productId,
        quantity: cartItem.quantity + 1,
      })
    );
  };

  const handleDecrement = () => {
    dispatch(
      updateCart({
        customerId: customer.id,
        productId: product.productId,
        quantity: cartItem.quantity - 1,
      })
    );
  };

  return (
    <>
      <div className="product-card  card card--box-shadow card--light card--violet">
        <img
          src={product.imgUrl}
          alt={product.name}
          className="rounded"
          width="250"
          height="250"
        ></img>
        <b>{product.name}</b>
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
          <div className="d-flex quantity">
            <Button
              className="Button"
              onClick={() => handleDecrement()}
              variant="warning"
            >
              -
            </Button>
            <p>{cartItem.quantity}</p>
            <Button
              className="Button"
              onClick={() => handleIncrement()}
              variant="warning"
            >
              +
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
export default ProductCard;
