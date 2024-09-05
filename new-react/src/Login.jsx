import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { validateLogin } from "./state/customerSlice";
import "./index.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const { status } = useSelector((state) => state.customer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (status === "success") {
      navigate("/");
    }
    // if (localStorage.getItem("jwtToken")) {
    //   navigate("/");
    // }
  }, [status]);

  const FormValidation = {
    Email: {
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid email address",
      },
    },
    Password: {
      required: "Password is required",
    },
  };

  const formData = {
    email: watch("email", ""),
    password: watch("password", ""),
  };

  const submitForm = async (e) => {
    dispatch(validateLogin(formData));
  };

  // const handleCancel = () => {
  //   setCustomer(initialFormData);
  // };

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
              <form onSubmit={handleSubmit(submitForm)}>
                {/* <!-- Email input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    {...register("email", FormValidation.Email)}
                    type="email"
                    className="form-control form-control-lg border border-1"
                    placeholder="Enter a valid email address"
                    name="email"
                  />
                  {errors.email && <p>{errors.email.message}</p>}

                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div data-mdb-input-init className="form-outline mb-3">
                  <input
                    {...register("password", FormValidation.Password)}
                    type="password"
                    className="form-control form-control-lg border border-1"
                    placeholder="Enter password"
                    name="password"
                  />
                  {errors.password && <p>{errors.password.message}</p>}

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
                    <a as={NavLink} to="/signup" className="link-danger">
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
