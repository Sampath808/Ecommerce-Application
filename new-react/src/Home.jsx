import Cards from "./Cards";
import "./index.css";
import Navbar from "./Navbar";
import ProductsList from "./ProductsList";

function Home() {
  return (
    <>
      <h1 className="text-center bg-success-subtle">
        Welcome to The Rice Shop
      </h1>
      <Navbar></Navbar>
      <ProductsList></ProductsList>
      <div className="container">
        <Cards></Cards>
      </div>
    </>
  );
}

export default Home;
