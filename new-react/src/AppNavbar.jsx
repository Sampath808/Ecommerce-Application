import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./index.css";

function AppNavbar() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="container-fluid">
              <Nav.Item className="justify-content-center">
                {" "}
                <form className="form-inline my-2 my-lg-0 d-flex">
                  <input
                    className="form-control mr-sm-2 col-8"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    style={{ color: "#ffc107" }}
                    className="btn btn-outline-light my-2 my-sm-0 col-3"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/cart">Go to cart</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
export default AppNavbar;
