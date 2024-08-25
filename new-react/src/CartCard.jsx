import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CartCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>product.name</Card.Title>
        <Card.Text>product.priceTag </Card.Text>
        <Button variant="primary">+</Button>
        <Button variant="primary">-</Button>
      </Card.Body>
    </Card>
  );
}

export default CartCard;
