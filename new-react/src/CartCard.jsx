import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { updateCart } from "./state/cartSlice";
import Button from "react-bootstrap/esm/Button";

function CartCard({ item }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(
      updateCart({
        customerId: 1,
        productId: item.product.productId,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = () => {
    dispatch(
      updateCart({
        customerId: 1,
        productId: item.product.productId,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleRemove = () => {
    dispatch(
      updateCart({
        customerId: 1,
        productId: item.product.productId,
        quantity: 0,
      })
    );
  };

  return (
    <>
      <div className="card-cart card--box-shadow card--light card--violet">
        <img
          src={item.imgUrl}
          alt={item.product.name}
          className="rounded flex-left"
          width="150"
          height="150"
        ></img>

        <section className="col-5">
          <p>{item.product.name}</p>
          <div className="d-flex quantity">
            <Button
              className="Button"
              onClick={() => handleDecrement()}
              variant="warning"
            >
              -
            </Button>
            <p>Quantity : {item.quantity}</p>
            <Button
              className="Button"
              onClick={() => handleIncrement()}
              variant="warning"
            >
              +
            </Button>
          </div>
        </section>
        <section className="col-5">
          <p>{item.product.priceTag}</p>
          <Button
            className="removeButton"
            onClick={() => handleRemove()}
            variant="danger"
          >
            Remove
          </Button>
        </section>
      </div>
    </>
  );
}

export default CartCard;
