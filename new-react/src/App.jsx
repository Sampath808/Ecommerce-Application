import Home from "./Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCustomer from "./AddCustomer";
import Welcome from "./Welcome";
import CartPage from "./CartPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/addcustomer" element={<AddCustomer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
