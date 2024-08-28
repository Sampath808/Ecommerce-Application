import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./index.css";

function CartCard({ item }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.product.name}</Card.Title>
        <Card.Text>{item.product.priceTag}</Card.Text>
        <Button variant="primary">+</Button>
        <p className="box">{item.quantity}</p>
        <Button variant="primary">-</Button>
      </Card.Body>
    </Card>
  );
}

export default CartCard;
