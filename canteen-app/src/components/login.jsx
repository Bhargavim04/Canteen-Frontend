import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../actions/loginactions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cus, setCus] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (event) => {
    const newCus = { ...cus };
    newCus[event.target.name] = event.target.value;
    setCus(newCus);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginAction(cus));
    alert("Logged in successfully!");
    navigate("/foodItems");
  };
  console.log(cus);
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-25 mx-auto border border-secondary rounded mt-4 p-2 shadow-lg p-3 mb-5 bg-body rounded"
      >
        <p className="text-center fs-4 bg-secondary text-white">Login Form</p>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            value={cus.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={cus.password}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="role" className="form-label">
          Role
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="role"
          name="role"
          value={cus.role}
          onChange={handleChange}
        >
          <option selected>Role</option>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
        </select>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;