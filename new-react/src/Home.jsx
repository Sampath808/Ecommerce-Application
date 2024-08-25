import "./index.css";
import AppNavbar from "./AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsList from "./ProductsList";
import CartIcon from "./CartIcon";

function Home() {
  return (
    <>
      <AppNavbar />
      <CartIcon />
      <div className="container">
        <ProductsList />
      </div>
    </>
  );
}

export default Home;
