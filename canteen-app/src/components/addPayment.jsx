// Functional component
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// step1:
//import Joi from "joi-browser";

const AddPayment = () => {
  // value, name, handleOnChange(), handleSubmit()
  // react hook methods - useState() - define state of component
  // useEffect() - called at the time of page loading and when there is change in state

  // Define state using useState
  let navigate = useNavigate();

  const [payment, setPayment] = useState({
    paymentId: "",
    cardNo: "",
    email: "",
   totalPayment: "",
   paymentType: "",
   postalCode: "",
        
  });

  

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy payment details to newPayment obj
    const newPayment = { ...payment };

    //newPayment.paymentId =10;
    //newPayment["paymentId"] = 10;
    //update newPayment object
    newPayment[event.target.name] = event.target.value;

    // update payment obj with newPay obj details
    setPayment(newPayment);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //axios.post(url, emp);
    const newPayment = {
      paymentId: payment.paymentId,
      cardNo: payment.cardNo,
      email: payment.email,
      totalPayment: payment.totalPayment,
      paymentType: payment.paymentType,
      //country: payment.country,
      postalCode: payment.postalCode,
    };
    // validate form data using validate method
    //const result = validate();
    //console.log(result);

    axios
      .post("http://localhost:8081/payment", newPayment)
      .then((res) => {
        console.log(res);
        alert("Added new payment " + res.data.paymentId + " successfully!");
        navigate("/payments");
      })
      .catch((error) => console.log(error));
  };
  console.log(payment);
  return (
    <div className="w-50 mx-auto mt-3">
      <p className="display-6 text-primary">Add New Payment</p>
      <form className="border p-3 bg-success" onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor="paymentId" className="form-label float-start">
            Payment Id
          </label>
          <input
            type="number"
            className="form-control"
            id="paymentId"
            value={payment.paymentId}
            name="paymentId"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 ">
          <label htmlFor="cardNo" className="form-label float-start">
            cardNo
          </label>
          <input
            type="number"
            className="form-control"
            id="cardNo"
            value={payment.cardNo}
            name="cardNo"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 ">
          <label htmlFor="email" className="form-label float-start">
            email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={payment.email}
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="totalPayment" className="form-label float-start">
            Total Payment
          </label>
          <input
            type="text"
            className="form-control"
            id="totalPayment"
            value={payment.totalPayment}
            name="totalPayment"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="paymentType" className="form-label float-start">
            Payment Type
          </label>
          <input
            type="text"
            className="form-control"
            id="paymentType"
            value={payment.paymentType}
            name="paymentType"
            onChange={handleChange}
          />
        </div>
        {/* <div className="mb-3 ">
          <label htmlFor="country" className="form-label float-start">
            country
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            value={payment.country}
            name="country"
            onChange={handleChange}
          />
        </div> */}
        <div className="mb-3 ">
          <label htmlFor="postalCode" className="form-label float-start">
            postalCode
          </label>
          <input
            type="number"
            className="form-control"
            id="postalCode"
            value={payment.postalCode}
            name="postalCode"
            onChange={handleChange}
          />
        </div>
        
        
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Add 
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPayment;