import React from "react";
import "./index.css";

function Welcome() {
  return (
    <>
      <h1>Click this button!</h1>
      <link className="btn btn-outline-danger" to="/addcustomer">
        Add User
      </link>
    </>
  );
}

export default Welcome;
