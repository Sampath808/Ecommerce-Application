function Navbar() {
  return (
    <nav className="nav nav-pills nav-justified bg-success-subtle">
      <a className="nav-link active" aria-current="page" href="#">
        Home
      </a>
      <a className="nav-link " href="#">
        Cart
      </a>
      <a className="nav-link " href="#">
        Profile
      </a>
      <a className="nav-link " href="#">
        Settings
      </a>
    </nav>
  );
}

export default Navbar;
