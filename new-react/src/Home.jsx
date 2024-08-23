import Cards from "./Cards";
import "./index.css";
import Navbar from "./Navbar";
import ProductsList from "./Redux_Components/ProductsList";

function Home() {
  return (
    <>
      <h1 className="text-center bg-success-subtle">
        Welcome to The Rice Shop
      </h1>
      <Navbar></Navbar>
      <div className="container">
        <Cards></Cards>
      </div>
      <ProductsList></ProductsList>
    </>
  );
}

export default Home;
