import Home from "./Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCustomer from "./AddCustomer";
import CartPage from "./CartPage";
import AppNavbar from "./AppNavbar";
import SingleOrder from "./SingleOrder";

function App() {
  return (
    <>
      <AppNavbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/anOrder" element={<SingleOrder />} />
          <Route exact path="/addCustomer" element={<AddCustomer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
