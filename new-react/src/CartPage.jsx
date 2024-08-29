import AppNavbar from "./AppNavbar";
import CartList from "./CartList";
import PricingDetials from "./PricingDetails";
import "./index.css";

function CartPage() {
  return (
    <>
      <AppNavbar></AppNavbar>
      <section className="parent-cart-container">
        <CartList className="cart-container" />
        <PricingDetials />
      </section>
    </>
  );
}

export default CartPage;
