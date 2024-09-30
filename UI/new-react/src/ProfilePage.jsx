import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { updateUserName } from "./state/customerSlice";
import React from "react";

const ProfilePage = () => {
  const { customer } = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const FormValidation = {
    Name: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Name must be at least 3 characters long",
      },
    },
    PhoneNo: {
      required: "Phone Number is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Phone number must be 10 digits",
      },
    },
  };

  const newUserName = watch("userName", "");
  const newPhoneNo = watch("phoneNo", "");

  const submitUserName = async () => {
    dispatch(updateUserName({ newName: newUserName }));
  };
  const submitPhoneNo = async () => {
    dispatch(updatePhoneNo({ newNumber: newPhoneNo }));
  };

  return (
    <div className="container">
      <div className="form-outline" data-mdb-input-init>
        <p>Your email: </p>

        <input
          className="form-control"
          name="email"
          type="text"
          value={customer.name}
          readOnly
        />
      </div>

      <div>
        <p>Personal Information</p>
        <form onSubmit={handleSubmit(submitUserName)}>
          <div className="form-outline" data-mdb-input-init>
            <input
              {...register("userName", FormValidation.Name)}
              type="text"
              name="userName "
              className="form-control form-control-lg border border-1"
              value={customer.name}
            />
            {errors.userName && <p>{errors.userName.message}</p>}
            <input type="submit"></input>
          </div>
        </form>
      </div>

      <div>
        <p>Phone Number</p>
      </div>
      <form onSubmit={handleSubmit(submitPhoneNo)}>
        <div className="form-outline" data-mdb-input-init>
          <input
            {...register("phoneNo", FormValidation.PhoneNo)}
            type="text"
            name="phoneNo"
            className="form-control form-control-lg border border-1"
            value={customer.phoneNo}
          />
          {errors.phoneNo && <p>{errors.phoneNo.message}</p>}
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
export default ProfilePage;
