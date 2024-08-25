import { Link } from "react-router-dom";
import "./index.css";
import { BsCart4 } from "react-icons/bs";

function CartIcon() {
  return (
    <Link to="/cart">
      <BsCart4 className="cartIcon"></BsCart4>
    </Link>
  );
}

export default CartIcon;
