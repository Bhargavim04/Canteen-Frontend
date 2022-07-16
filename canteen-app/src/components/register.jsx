import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "../actions/loginactions";
import { useNavigate } from "react-router-dom";

const Register = () => {
    
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cus, setCus] = useState({
    cusName: "",
    cusContactNo: "",
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
    dispatch(registerAction(cus));
    alert(cus.cusName +" Registered Successfully!");
    navigate("/login");
  };
  console.log(cus);
    return ( 
      <div>
        <form className="w-25 mx-auto border border-primary m-2 px-3 pb-2 shadow-lg p-3 mb-5 bg-body rounded" 
        onSubmit={handleSubmit}>
        <p className="text-center fs-4 fw-bold text-decoration-underline">Registration Form</p>
        <div className="mb-3">
           <label htmlFor="cusName" className="form-label ms-2 float-start">
            Full Name</label>
           <input type="text" 
           className="form-control" 
           id="cusName" 
           value={cus.cusName}
           name="cusName"
           onChange={handleChange}
           required />
        </div>
        <div className="mb-3">
            <label htmlFor="cusContactNo" className="form-label float-start">
            Contact Number</label>
            <input type="text" 
            className="form-control" 
            id="cusContactNo"
            value={cus.cusContactNo}
            name="cusContactNo"
            onChange={handleChange} 
            required />
          </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label float-start">
          Email address</label>
          <input type="email" 
          className="form-control" 
          id="email" 
          aria-describedby="emailHelp"
          value={cus.email}
          name="email"
          onChange={handleChange}
          required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label float-start">
          Password</label>
          <input type="password" 
          className="form-control" 
          id="password" 
          value={cus.password}
          name="password"
          onChange={handleChange}
          required />
        </div>
        <label htmlFor="role" className="form-label float-start">
            Role
          </label>
          <select
            className="form-select mb-3"
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
        <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      </div>
     );
}
 
export default Register;