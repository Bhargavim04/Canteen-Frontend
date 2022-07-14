import React from 'react';

const Address = () => {
    return ( 
    <div>
    <form className="w-25 mx-auto border border-primary m-2 px-3 pb-2 shadow-lg p-3 mb-5 bg-body rounded">
    <p className="text-center fs-4 fw-bold text-decoration-underline">Address</p>
    <div className="mb-2">
       <label for="HouseNo" className="form-label float-start">House Number</label>
       <input type="text" className="form-control" id="HouseNo" required />
    </div>
    <div className="mb-2">
        <label for="Street" className="form-label float-start">Street</label>
        <input type="text" className="form-control" id="Street" required />
      </div>
    <div className="mb-2">
      <label for="City" className="form-label float-start">City</label>
      <input type="text" className="form-control" id="City" required />
    </div>
    <label for="State" className="form-label float-start">State</label>
    <select className="form-select mb-2" aria-label="Default select example" required>
        <option selected disabled>Select state</option>
        <option value="1">Karnataka</option>
        <option value="2">Tamil Nadu</option>
        <option value="3">Andhra Pradesh</option>
        <option value="4">Telangana</option>
        <option value="5">Kerala</option>
        <option value="6">Uttar Pradesh</option>
        <option value="7">Maharashtra</option>
        <option value="8">Bihar</option>
        <option value="9">Tripura</option>
        <option value="10">Gujarat</option>
    </select>
    <div className="mb-3">
        <label for="Pincode" className="form-label float-start">Pincode</label>
        <input type="text" className="form-control" id="Pincode" required pattern="[0-9]{6}" />
    </div>
    <div className="d-grid gap-2">
    <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </form> 
  </div>
  );
}
 
export default Address;