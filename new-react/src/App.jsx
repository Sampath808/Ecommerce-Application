import Home from "./Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CartPage from "./CartPage";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import OrdersPage from "./OrdersPage";
import Signup from "./Signup";
import Login from "./Login";
import OrderDetails from "./OrderDetails";
import LayoutWithNavbar from "./LayOutWithNavbar";

function AppWrapper() {
  const location = useLocation();
  return (
    <Routes>
      {/* Routes with Navbar */}
      <Route element={<LayoutWithNavbar />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orderDetail/:id" element={<OrderDetails />} />
      </Route>

      {/* Routes without Navbar */}
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
