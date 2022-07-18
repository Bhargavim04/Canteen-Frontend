import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../actions/loginactions";
import Joi from "joi-browser";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const [errRes, setErrRes] = useState("");

  //Step1:  Define schema to validate email and password
  const schema = {
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().min(8).max(30).required(),
    role: Joi.string().required(),
  };

  // Step 2: Validate
  const validate = () => {
    const errors = {}; //object type local variable
    const result = Joi.validate(login, schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  // connect store to get login and errMsg info

  const lgn = useSelector((state) => state.login);

  //setErrRes(useSelector((state) => state.login.errMsg));

  const handleChange = (event) => {
    const newLogin = { ...login };
    newLogin[event.target.name] = event.target.value;
    setLogin(newLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Step3: Call validate function
    // validate login details with schema
    setErrors(validate());

    if (errors) return;

    // dispatch login action to server
    dispatch(loginAction(login));

    alert("Logged in successfully!");
    navigate("/foodItems");

  };
  console.log(login);
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-25 mx-auto border border-secondary rounded mt-4 p-2 shadow-lg p-3 mb-5 bg-body rounded"
      >
        <p className="text-center fs-4 bg-primary text-white">Login Form</p>

        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1"><i class="bi bi-envelope-fill"></i></span>
        <input type="email" 
        className="form-control" 
        placeholder="Email Address"
        id="email"
        value={login.email}
        name="email"
        onChange={handleChange} 
        aria-label="Contact Number" 
        aria-describedby="basic-addon1" />
        {errors && <small className="text-danger">{errors.email}</small>}
        </div>

        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1"><i class="bi bi-lock-fill"></i></span>
        <input type="password" 
        className="form-control" 
        placeholder="Password"
        id="password" 
        value={login.password}
        name="password"
        onChange={handleChange} 
        aria-label="Password" 
        aria-describedby="basic-addon1" />
        {errors && <small className="text-danger">{errors.password}</small>}
        </div>

        <select
          className="form-select"
          aria-label="Default select example"
          id="role"
          name="role"
          value={login.role}
          onChange={handleChange}
        >
          <option selected>Role</option>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
        </select>
        {errors && <small className="text-danger">{errors.role}</small>}
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;