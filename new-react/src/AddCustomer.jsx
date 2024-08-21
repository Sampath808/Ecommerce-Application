import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCustomer() {
  let navigate = useNavigate();

  const [customer, setCustomer] = useState({
    userName: "",
    phoneNo: "",
    email: "",
    newPassword: "",
    rePassword: "",
    state: "",
  });

  const { userName, phoneNo, email, newPassword, rePassword, state } = customer;

  const handleInput = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/saveCustomer", customer);
    navigate("/home");
  };

  return (
    <div>
      <p>Regester using this form...</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="userName" className="from-lable">
          User Name:{" "}
        </label>
        <input
          type={"text"}
          value={userName}
          onChange={(e) => handleInput(e)}
          className="form-control"
          placeholder="Enter your name"
          name="userName"
        />

        <label htmlFor="phoneNo" className="from-lable">
          Phone Number:{" "}
        </label>
        <input
          type={"text"}
          value={phoneNo}
          onChange={(e) => handleInput(e)}
          className="form-control"
          placeholder="Enter your phone no"
          name="phoneNo"
        />

        <label htmlFor="email" className="from-lable">
          Email:{" "}
        </label>
        <input
          type={"text"}
          value={email}
          onChange={(e) => handleInput(e)}
          className="form-control"
          placeholder="Enter your email"
          name="email"
        />

        <label htmlFor="newPassword" className="from-lable">
          New Password:{" "}
        </label>
        <input
          type={"text"}
          value={newPassword}
          onChange={(e) => handleInput(e)}
          className="form-control"
          placeholder="Enter a new password"
          name="newPassword"
        />

        <label htmlFor="rePassword" className="from-lable">
          Re-enter Password:{" "}
        </label>
        <input
          type={"text"}
          value={rePassword}
          onChange={(e) => handleInput(e)}
          className="form-control"
          placeholder="Enter the password again"
          name="rePassword"
        />

        <label htmlFor="state" className="from-lable">
          State:{" "}
        </label>
        <input
          type={"text"}
          value={state}
          onChange={(e) => handleInput(e)}
          className="form-control"
          placeholder="Where are you from?"
          name="state"
        />

        <button type="submit" className="btn btn-outline-primary">
          {" "}
          Submit{" "}
        </button>
        <button className="btn btn-outline-danger"> Cancel </button>
      </form>
    </div>
  );
}
export default AddCustomer;
