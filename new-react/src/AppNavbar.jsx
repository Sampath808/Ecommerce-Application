import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decodeToken } from "./services/JwtDecode";
import { useEffect } from "react";
import { setUser } from "./state/customerSlice";

function AppNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartError = useSelector((state) => state.cart.error);
  const orderError = useSelector((state) => state.order.error);
  const customerError = useSelector((state) => state.customer.error);
  const productError = useSelector((state) => state.products.error);

  useEffect(() => {
    if (
      cartError?.status == 403 ||
      orderError?.status == 403 ||
      customerError?.status == 403 ||
      productError?.status == 403
    ) {
      console.error("Unauthorized user exception, Logging off...");
      localStorage.removeItem("jwtToken");
      navigate("/login");
    }
  }, [cartError]);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      const userDetails = decodeToken(token);
      if (userDetails) {
        dispatch(setUser(userDetails));
      } else {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/" style={{ color: "white" }}>
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="container-fluid">
              <Nav.Item className="justify-content-center">
                {" "}
                <form className="row m-2 w-100">
                  <div className="mr-sm-2 col-8">
                    <input
                      className="form-control "
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                  <div className="mr-sm-2 col-3">
                    <button className="btn btn-outline-light " type="submit">
                      Search
                    </button>
                  </div>
                </form>
              </Nav.Item>
              <Nav.Item className="cart-link ">
                <Nav.Link as={NavLink} to="/orders" style={{ color: "white" }}>
                  Orders
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="cart-link ">
                <Nav.Link as={NavLink} to="/cart" style={{ color: "white" }}>
                  Go to cart
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default AppNavbar;
