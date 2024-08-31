import Home from "./Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCustomer from "./AddCustomer";
import CartPage from "./CartPage";
import AppNavbar from "./AppNavbar";
import SingleOrder from "./SingleOrder";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/orderDetail/:id" element={<SingleOrder />} />
          <Route path="/addCustomer" element={<AddCustomer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
