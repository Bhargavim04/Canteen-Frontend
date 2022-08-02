import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { addressAction } from "../../../../Canteen Frontend/canteen-app/src/actions/addressactions";
import { useNavigate } from "react-router-dom";

const Address = () => {
    
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cus, setCus] = useState({
    houseNo: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const customer = useSelector((state) => state.custstore.customer);
  console.log(customer.cusId);
  const handleChange = (event) => {
    const newCus = { ...cus };
    newCus[event.target.name] = event.target.value;
    setCus(newCus);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addressAction(cus,customer.cusId));
    alert("Address Added Successfully!");
    navigate("/foodItems");
  };
  console.log(cus);
    return ( 
    <div>
    <form className="w-25 mx-auto border border-primary m-2 px-3 pb-2 shadow-lg p-3 mb-5 bg-body rounded"
    onSubmit={handleSubmit}>
    <p className="text-center fs-4 fw-bold text-decoration-underline">Address</p>
    <div className="mb-2">
       <label htmlFor="houseNo" className="form-label float-start">House Number</label>
       <input type="text" 
       className="form-control" 
       id="houseNo" 
       value={cus.houseNo}
       name="houseNo"
       onChange={handleChange}
       required />
    </div>
    <div className="mb-2">
        <label htmlFor="street" className="form-label float-start">Street</label>
        <input type="text" 
        className="form-control" 
        id="street" 
        value={cus.street}
        name="street"
        onChange={handleChange}
        required />
      </div>
    <div className="mb-2">
      <label htmlFor="city" className="form-label float-start">City</label>
      <input type="text" 
      className="form-control" 
      id="city"
      value={cus.city}
      name="city"
      onChange={handleChange} 
      required />
    </div>
    <div className="mb-2">
      <label htmlFor="city" className="form-label float-start">State</label>
      <input type="text" 
      className="form-control" 
      id="state"
      value={cus.state}
      name="state"
      onChange={handleChange} 
      required />
    </div>
    {/* <label htmlFor="state" className="form-label float-start">State</label>
    <select className="form-select mb-2" size="1"
    aria-label="Default select example" 
    id="state"
    value={cus.state}
    name="state"
    onChange={handleChange} 
    >
        <option selected disabled>Select state</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Telangana">Telangana</option>
        <option value="Kerala">Kerala</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Bihar">Bihar</option>
        <option value="Tripura">Tripura</option>
        <option value="Gujarat">Gujarat</option>
    </select> */}
    <div className="mb-3">
        <label htmlFor="pinCode" className="form-label float-start">Pincode</label>
        <input type="text" 
        className="form-control" 
        id="pinCode"
        value={cus.pinCode}
        name="pinCode"
        onChange={handleChange} 
        required pattern="[0-9]{6}" />
    </div>
    <div className="d-grid gap-2">
    <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </form> 
  </div>
  );
}
 
export default Address;