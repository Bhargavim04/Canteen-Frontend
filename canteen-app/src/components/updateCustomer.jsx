import React, { useState, useEffect }  from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateCustomer = () => {

    const params = useParams();
    let navigate = useNavigate();
    console.log(params);

    // define state
    const [cus, setCus] = useState({
    cusId: "",
    cusName: "",
    cusContactNo: "",
    email: "",
    });

    //useEffect(callback function,[condition] )
    // get existing cus details using id and update cus state obj
    useEffect(() => {
    axios
      .get(`http://localhost:8081/customer/dto/${params.id}`)
      .then((res) => setCus(res.data))
      .catch((err) => console.log(err));
    }, []);

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
    // send put request to update
    axios
      .put(`http://localhost:8081/customer/dto/${params.id}`, cus)
      .then((res) => {
        console.log(res);
        // alert user with msg
        alert("Updated details of " + res.data.cusName + " successfully!");
        // redirect to view customers page
        navigate("/profile");
      })
      .catch((error) => console.log(error));
  };
    return ( 
        <div>
        <form className="w-25 mx-auto border border-primary m-2 px-3 pb-2 shadow-lg p-3 mb-5 bg-body rounded" 
        onSubmit={handleSubmit}>
        <p className="text-center fs-4 fw-bold text-decoration-underline">Update your details</p>
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
        <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">Update</button>
        </div>
      </form>
      </div>
     );
}
 
export default UpdateCustomer;