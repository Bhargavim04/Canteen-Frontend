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
        <form className="w-25 mx-auto border border-primary m-2 px-3 pb-2 shadow-lg p-3 mb-5 mt-5 bg-body rounded" 
        onSubmit={handleSubmit}>
        <p className="text-center fs-4 fw-bold text-decoration-underline">Registration Form</p>
        
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1"><i class="bi bi-person-fill"></i></span>
        <input type="text" 
        className="form-control" 
        placeholder="Full Name"
        id="cusName" 
        value={cus.cusName}
        name="cusName"
        onChange={handleChange}
        aria-label="Full Name" 
        aria-describedby="basic-addon1" />
        </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1"><i class="bi bi-telephone-fill"></i></span>
        <input type="text" 
        className="form-control" 
        placeholder="Contact Number"
        id="cusContactNo"
        value={cus.cusContactNo}
        name="cusContactNo"
        onChange={handleChange} 
        aria-label="Contact Number" 
        aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1"><i class="bi bi-envelope-fill"></i></span>
        <input type="email" 
        className="form-control" 
        placeholder="Email Address"
        id="email"
        value={cus.email}
        name="email"
        onChange={handleChange} 
        aria-label="Contact Number" 
        aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1"><i class="bi bi-lock-fill"></i></span>
        <input type="password" 
        className="form-control" 
        placeholder="Password"
        id="password" 
        value={cus.password}
        name="password"
        onChange={handleChange} 
        aria-label="Password" 
        aria-describedby="basic-addon1" />
        </div>

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