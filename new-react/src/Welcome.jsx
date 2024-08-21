import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <h1>Click this button!</h1>
      <Link className="btn btn-outline-danger" to="/addcustomer">
        Add User
      </Link>
      <Link className="btn btn-outline-danger" to="/home">
        Take me Home
      </Link>
    </>
  );
}

export default Welcome;
