import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PricingDetials = () => {
  const { totalAmount, totalQuantity } = useSelector((state) => state.cart);
  return (
    <Card style={{ width: "18rem" }} className=" price-details sticky-top ">
      <Card.Body>
        <Card.Title>Pricing details</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Subtotal ({totalQuantity} items) : Rs.{totalAmount}.0
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted ">
          Delivery Charges : Free
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Total Amount : {totalAmount}
        </Card.Subtitle>
        <Button varient="info">Place Order</Button>
      </Card.Body>
    </Card>
  );
};

export default PricingDetials;
