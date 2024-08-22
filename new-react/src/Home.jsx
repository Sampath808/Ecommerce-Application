import Cards from "./Cards";
import ImageUploader from "./ImageUploader";
import "./index.css";
import Navbar from "./Navbar";

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
    </>
  );
}

export default Home;
