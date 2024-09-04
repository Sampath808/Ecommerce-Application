import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "./state/orderSlice";

const PricingDetials = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { totalAmount, totalQuantity } = useSelector((state) => state.cart);
  const { status } = useSelector((state) => state.order);

  // useEffect(() => {
  //   if (status === "success") {
  //     navigate("/orderDetail/0");
  //   }
  // }, [status]);

  const handlePlaceOrder = () => {
    dispatch(
      placeOrder({
        orderStatus: "OrderPlaced",
        amount: totalAmount,
        customerId: 1,
        paymentType: "COD",
        paymentReference: "someID",
      })
    );
    if (status === "success") {
      alert("Your order is placed...!");
      navigate("/orderDetail/0");
    }
  };

  return (
    <Card style={{ width: "22rem" }} className=" price-details sticky-top m-4">
      <Card.Body>
        <Card.Title>Pricing details</Card.Title>
        <div className="row w-100">
          <div className="mb-2 text-muted col-7">
            Subtotal ({totalQuantity} items) :
          </div>
          <b className="mb-2 text-muted col-4 ">Rs.{totalAmount}.0</b>
          <div className="mb-2 text-muted col-7">Delivery Charges :</div>
          <b className="mb-2 text-muted col-4">Free</b>
          <div className="mb-2 text-muted col-7">Total Amount :</div>
          <b className="mb-2 text-muted col-4">Rs.{totalAmount}.0</b>
        </div>
        <div className="text-center">
          <Button variant="success" onClick={() => handlePlaceOrder()}>
            Place Order
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PricingDetials;
