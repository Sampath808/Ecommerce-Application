import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { updateCart } from "./state/cartSlice";

function CartCard({ item }) {
  const dispatch = useDispatch();
  const { customer } = useSelector((state) => state.customer);

  const handleIncrement = () => {
    dispatch(
      updateCart({
        customerId: customer.id,
        productId: item.product.productId,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = () => {
    dispatch(
      updateCart({
        customerId: customer.id,
        productId: item.product.productId,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleRemove = () => {
    dispatch(
      updateCart({
        customerId: customer.id,
        productId: item.product.productId,
        quantity: 0,
      })
    );
  };

  return (
    <Container>
      <div className="card-cart card--box-shadow card--light">
        <img
          src={item.imgUrl}
          alt={item.product.name}
          className="rounded flex-left"
          width="150"
          height="150"
        ></img>

        <div>
          <p className="text-center">{item.product.name}</p>
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
        </div>
        <div className="text-center">
          <p>{item.product.priceTag}</p>
          <Button
            className="removeButton"
            onClick={() => handleRemove()}
            variant="danger"
          >
            Remove
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default CartCard;
