import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsList from "./ProductsList";

function Home() {
  return (
    <>
      <div className="product-container">
        <ProductsList />
      </div>
    </>
  );
}

export default Home;
