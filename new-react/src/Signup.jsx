import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerCustomer } from "./state/customerSlice";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const initialFormData = {
  //   userName: "",
  //   phoneNo: "",
  //   email: "",
  //   newPassword: "",
  //   confirmPassword: "",
  //   state: "",
  // };
  // const [customer, setCustomer] = useState(initialFormData);
  const password = watch("newPassword", "");

  const FormValidation = {
    Name: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Name must be at least 3 characters long",
      },
    },
    PhoneNumer: {
      required: "Phone number is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Phone number must be 10 digits",
      },
    },
    Email: {
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid email address",
      },
    },
    Password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters long",
      },
    },
    ConfirmPassword: {
      required: "Please confirm your password",
      validate: (value) => value === password || "Passwords do not match",
    },
    State: { required: "State is required" },
  };

  // const { userName, phoneNo, email, newPassword, confirmPassword, state } = customer;

  // const handleInput = (e) => {
  //   setCustomer({
  //     ...customer,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const submitForm = async (data) => {
    dispatch(registerCustomer(data));
    alert("Successfully registered!");
  };

  const handleCancel = () => {
    setCustomer(initialFormData);
  };

  return (
    <div className="container ">
      <div className="card m-2 ">
        <form onSubmit={handleSubmit(submitForm)} className="m-2">
          <div className="row justify-content-center m-2">
            <div className="col-2 text-end">
              <label htmlFor="userName" className="from-lable ">
                User Name:{" "}
              </label>
            </div>
            <div className="col-5">
              <input
                {...register("userName", FormValidation.Name)}
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="userName"
              />
              {errors.userName && <p>{errors.userName.message}</p>}
            </div>
          </div>

          <div className="row  justify-content-center m-2">
            <div className="col-2 text-end">
              <label htmlFor="phoneNumber" className="from-lable">
                Phone Number:{" "}
              </label>
            </div>
            <div className="col-5">
              <input
                {...register("phoneNumber", FormValidation.PhoneNumer)}
                type="text"
                className="form-control"
                placeholder="Enter your phone no"
                name="phoneNo"
              />
              {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
            </div>
          </div>

          <div className="row  justify-content-center m-2">
            <div className="col-2 text-end">
              <label htmlFor="email" className="from-lable">
                Email:{" "}
              </label>
            </div>
            <div className="col-5">
              <input
                {...register("email", FormValidation.Email)}
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          </div>

          <div className="row  justify-content-center m-2">
            <div className="col-2 text-end">
              <label htmlFor="newPassword" className="from-lable">
                New Password:{" "}
              </label>
            </div>
            <div className="col-5">
              <input
                {...register("newPassword", FormValidation.Password)}
                type="password"
                className="form-control"
                placeholder="Enter a new password"
                name="newPassword"
              />
              {errors.newPassword && <p>{errors.newPassword.message}</p>}
            </div>
          </div>

          <div className="row  justify-content-center m-2">
            <div className="col-2 text-end">
              <label htmlFor="confirmPassword" className="from-lable">
                Re-enter Password:{" "}
              </label>
            </div>
            <div className="col-5">
              <input
                {...register("confirmPassword", FormValidation.ConfirmPassword)}
                type="password"
                className="form-control"
                placeholder="Enter the password again"
                name="rePassword"
              />
              {errors.confirmPassword && (
                <p>{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>
          <div className="row  justify-content-center m-2">
            <div className="col-2 text-end">
              <label htmlFor="state" className="from-lable">
                State:{" "}
              </label>
            </div>
            <div className="col-5">
              <input
                {...register("state", FormValidation.State)}
                type="text"
                className="form-control"
                placeholder="Where are you from?"
                name="state"
              />
              {errors.state && <p>{errors.state.message}</p>}
            </div>
          </div>

          <div className="d-flex justify-content-center m-2">
            <button type="submit" className="btn btn-outline-primary m-2">
              {" "}
              Submit{" "}
            </button>
            <button
              className="btn btn-outline-danger m-2"
              onClick={() => handleCancel()}
            >
              {" "}
              Cancel{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
