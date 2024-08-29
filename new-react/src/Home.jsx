import "./index.css";
import AppNavbar from "./AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsList from "./ProductsList";

function Home() {
  return (
    <>
      <AppNavbar />
      <div className="product-container">
        <ProductsList />
      </div>
    </>
  );
}

export default Home;
