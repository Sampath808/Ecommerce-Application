import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";
import { NavLink } from "react-router-dom";

function AppNavbar() {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
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
                <Nav.Link as={NavLink} to="/cart">
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
