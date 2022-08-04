// Functional component
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// step1:
//import Joi from "joi-browser";

const Addcard = () => {
  // value, name, handleOnChange(), handleSubmit()
  // react hook methods - useState() - define state of component
  // useEffect() - called at the time of page loading and when there is change in state

  // Define state using useState
  let navigate = useNavigate();

  const [crd, setCrd] = useState({
    
   cardId: "",
    cardBankName: "",
    cardHolderName: "",
    cardNo: "",
    
    
    cvv:"",
     expDate: "",
  });

  //Step 2:  Create schema obj for validating form data
  // const schema = {
  //   empName: Joi.string().alphanum().min(3).max(30).required(),
  //   salary: Joi.number().integer().min(5000).max(200000).required(),
  //   dob: Joi.date().iso().required(),
  //   email: Joi.string()
  //     .email({
  //       minDomainSegments: 2,
  //       tlds: { allow: ["com", "net"] },
  //     })
  //     .required(),
  //   password: Joi.string().required(),
  // };

  // // Step 3: Validate
  // const validate = () => {
  //   const errors = {}; //object type local variable
  //   const result = Joi.validate(emp, schema, {
  //     abortEarly: false,
  //   });
  //   console.log(result);
  //   // setting error messages to error properties
  //   // ex: errors[username] = "username is required";
  //   // ex: errors[password] = "password is required";
  //   if (result.error != null)
  //     for (let item of result.error.details) {
  //       errors[item.path[0]] = item.message;
  //     }
  //   return Object.keys(errors).length === 0 ? null : errors;
  // };

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy emp details to newEmp obj
    const newCrd = { ...crd };

    //newEmp.empId =10;
    //newEmp["empId"] = 10;
    //update newEmp object
    newCrd[event.target.name] = event.target.value;

    // update emp obj with newEmp obj details
    setCrd(newCrd);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //axios.post(url, emp);
    const newCrd = {
     cardId: crd.cardId,
       cardBankName: crd.cardBankName,
      cardHolderName: crd.cardHolderName,
      cardNo: crd.cardNo,
       cvv: crd.cvv,
      expDate: crd.expDate,
      
    };
    // validate form data using validate method
    //const result = validate();
    //console.log(result);

    axios
      .post("http://localhost:8081/card_details", newCrd)
      .then((res) => {
        console.log(res);
        alert("Added new carddetails " + res.data.cardId + " successfully!");
        navigate("/card");
      })
      .catch((error) => console.log(error));
  };
  console.log(crd);

  return (

    <div className="w-25 mx-auto mt-3">
       <p className="text-center fs-2 bg-secondary text-white border border-secondary rounded shadow-lg">Add New Card</p>

      <form className="border border-secondary rounded p-3 shadow-lg" onSubmit={handleSubmit}>

     
        <div className="mb-3">
          <label htmlFor="card_id" className="form-label float-start">
            Card Id
          </label>
          <input
            type="text"
            className="form-control"
            id="cardId"
            value={crd.cardId}
            name="cardId"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cardBankName" className="form-label float-start">
            cardBankName
          </label>
          <input
            type="text"
            className="form-control"
            id="cardBankName"
            value={crd.cardBankName}
            name="cardBankName"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cardHolderName" className="form-label float-start">
            cardHolderName
          </label>
          <input
            type="text"
            className="form-control"
            id="cardHolderName"
            name="cardHolderName"
            value={crd.cardHolderName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cardNo" className="form-label float-start">
            cardNo
          </label>
          <input
            type="text"
            className="form-control"
            id="cardNo"
            value={crd.cardNo}
            name="cardNo"
            onChange={handleChange}
          />
        </div>
<div className="mb-3">
          <label htmlFor="cvv" className="form-label float-start">
            cvv
          </label>
          <input
            type="text"
            className="form-control"
            id="cvv"
            value={crd.cvv}
            name="cvv"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expDate" className="form-label float-start">
            expDate
          </label>
          <input
            type="date"
            className="form-control"
            id="expDate"
            value={crd.expDate}
            name="expDate"
            onChange={handleChange}
          />
        </div>
        
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </div>

      </form>
    </div>
  );
};

export default Addcard;