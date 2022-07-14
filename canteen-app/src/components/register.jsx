import React from 'react';
import axios from "axios";
import { useState } from "react";

const Register = () => {
    
  // Define state using useState
  const [cus, setCus] = useState({
    cusName: "",
    cusContactNo: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy cus details to newCus obj
    const newCus = { ...cus };

    newCus[event.target.name] = event.target.value;

    // update cus obj with newCus obj details
    setCus(newCus);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //axios.post(url, emp);
    const newCus = {
      cusName: cus.cusName,
      cusContactNo: cus.cusContactNo,
      login: {
        email: cus.email,
        password: cus.password,
      },
    };
    axios
      .post("http://localhost:8081/customer", newCus)
      .then((res) => {
        console.log(res);
        alert(res.data.cusName + "you have Registered Successfully!");
      })
      .catch((error) => console.log(error));
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
        <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      </div>
     );
}
 
export default Register;