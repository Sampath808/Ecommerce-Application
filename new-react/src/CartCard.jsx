import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./index.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./state/cartSlice";

function CartCard({ item }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(
      addToCart({
        customerId: 1,
        productId: item.product.productId,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = () => {
    dispatch(
      addToCart({
        customerId: 1,
        productId: item.product.productId,
        quantity: item.quantity - 1,
      })
    );
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.product.name}</Card.Title>
        <Card.Text>{item.product.priceTag}</Card.Text>
        <Button onClick={() => handleIncrement()} variant="primary">
          +
        </Button>
        <p className="box">{item.quantity}</p>
        <Button onClick={() => handleDecrement()} variant="primary">
          -
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartCard;
