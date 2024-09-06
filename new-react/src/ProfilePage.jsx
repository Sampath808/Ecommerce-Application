import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { updateUserName } from "./state/customerSlice";
import React from "react";

const ProfilePage = () => {
  const { customer } = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  let userNameEditDisplay = false;
  let phoneNoEditDisplay = false;

  const handleUserNameEdit = () => {
    userNameEditDisplay = true;
  };

  const handleUserNameCancel = () => {
    userNameEditDisplay = false;
  };

  const handlePhoneNoEdit = () => {
    phoneNoEditDisplay = true;
  };

  const handlePhoneNoCancel = () => {
    phoneNoEditDisplay = false;
  };

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
      <div>
        <p>Personal Information</p>
        {userNameEditDisplay ? (
          <a onClick={handleUserNameCancel()}>Cancel</a>
        ) : (
          <a onClick={handleUserNameEdit()}>Edit</a>
        )}
      </div>
      {userNameEditDisplay ? (
        <from onSubmit={handleSubmit(submitUserName)}>
          <div>
            <input
              {...register("userName", FormValidation.Name)}
              type="text"
              name="userName"
              className="form-control form-control-lg"
              placeholder="Enter your name"
            />
            {errors.userName && <p>{errors.userName.message}</p>}
          </div>
        </from>
      ) : (
        <div class="form-outline" data-mdb-input-init>
          <input
            class="form-control"
            id="formControlReadonly"
            name="userName"
            type="text"
            value={customer.userName}
            readonly
          />
          <label class="form-label" for="userName">
            Readonly
          </label>
        </div>
      )}

      <div class="form-outline" data-mdb-input-init>
        <input
          class="form-control"
          id="formControlReadonly"
          name="email"
          type="text"
          value={customer.email}
          readonly
        />
        <label class="form-label" for="formControlReadonly">
          Readonly
        </label>
      </div>

      <div>
        <p>Phone Number</p>
        {phoneNoEditDisplay ? (
          <a onClick={handlePhoneNoCancel()}>Cancel</a>
        ) : (
          <a onClick={handlePhoneNoEdit()}>Edit</a>
        )}
      </div>
      {phoneNoEditDisplay ? (
        <from onSubmit={handleSubmit(submitPhoneNo)}>
          <div>
            <input
              {...register("phoneNo", FormValidation.PhoneNo)}
              type="text"
              name="phoneNo"
              className="form-control form-control-lg"
              placeholder="Enter your phone number"
            />
            {errors.phoneNo && <p>{errors.phoneNo.message}</p>}
          </div>
        </from>
      ) : (
        <div class="form-outline" data-mdb-input-init>
          <input
            class="form-control"
            id="formControlReadonly"
            name="phoneNo"
            type="text"
            value={customer.phoneNo}
            readonly
          />
          <label class="form-label" for="phoneNo">
            Readonly
          </label>
        </div>
      )}
    </div>
  );
};
export default ProfilePage;
