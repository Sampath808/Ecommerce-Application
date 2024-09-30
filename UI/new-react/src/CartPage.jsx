import Container from "react-bootstrap/esm/Container";
import CartList from "./CartList";
import PricingDetials from "./PricingDetails";
import "./index.css";

function CartPage() {
  return (
    <>
      <h2 className="text-center">Your Cart</h2>
      <Container>
        <div className="parent-cart-container">
          <CartList className="cart-container" />
          <PricingDetials />
        </div>
      </Container>
    </>
  );
}

export default CartPage;
