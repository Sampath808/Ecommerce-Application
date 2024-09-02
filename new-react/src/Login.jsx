import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerCustomer } from "./state/customerSlice";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialFormData = {
    email: "",
    password: "",
  };

  const [loginForm, setLoginForm] = useState(initialFormData);
  const { email, password } = loginForm;
  const handleInput = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {};

  const handleCancel = () => {
    setCustomer(initialFormData);
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                {/* <!-- Email input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    value={email}
                    className="form-control form-control-lg border border-1"
                    placeholder="Enter a valid email address"
                    name="email"
                    onChange={(e) => handleInput(e)}
                  />
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div data-mdb-input-init className="form-outline mb-3">
                  <input
                    type="password"
                    value={password}
                    className="form-control form-control-lg border border-1"
                    placeholder="Enter password"
                    name="password"
                    onChange={(e) => handleInput(e)}
                  />
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg"
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="#!" className="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"></div>
      </section>
    </>
  );
};

export default Login;
