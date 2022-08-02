import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { registerAction } from "../actions/loginactions";
import { useNavigate } from "react-router-dom";
import Joi from "joi-browser";

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

  const [errors, setErrors] = useState({});
  const [errRes, setErrRes] = useState("");

  //Step1:  Define schema to validate email and password
  const schema = {
    cusName: Joi.string().min(3).max(20).required(),
    cusContactNo: Joi.string().min(10).max(10).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().min(8).max(30).required(),
    role: Joi.string().required(),
  };

  // Step 2: Validate
  const validate = () => {
    const errors = {}; //object type local variable
    const result = Joi.validate(cus, schema, {
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

  const lgn = useSelector((state) => state.custstore);

  //setErrRes(useSelector((state) => state.login.errMsg));

 const handleChange = (event) => {
    const newCus = { ...cus };
    newCus[event.target.name] = event.target.value;
    setCus(newCus);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Step3: Call validate function
    // validate login details with schema
    setErrors(validate());

    if (errors) return;

    // dispatch login action to server
    dispatch(registerAction(cus));

    alert(cus.cusName +" Registered Successfully!");
    navigate("/login");

  };
  console.log(cus);

    return ( 
      <div>
        {errRes && <p className="alert alert-danger">{errRes}</p>}
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
        {errors && <small className="text-danger">{errors.cusName}</small>}
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
        {errors && <small className="text-danger">{errors.cusContactNo}</small>}
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
        {errors && <small className="text-danger">{errors.email}</small>}
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
        {errors && <small className="text-danger">{errors.password}</small>}
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
          {errors && <small className="text-danger">{errors.role}</small>}
        <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      </div>
     );
    }
 
export default Register;