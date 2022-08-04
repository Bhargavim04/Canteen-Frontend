import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// step1:
//import Joi from "joi-browser";

const PayWithCard = () => {
  // value, name, handleOnChange(), handleSubmit()
  // react hook methods - useState() - define state of component
  // useEffect() - called at the time of page loading and when there is change in state

  // Define state using useState
  let navigate = useNavigate();

  const [crd, setCard] = useState({
    cardId: "",
    cardBankName: "",
    cardHolderName: "",
    cardNo: "",
    cvv: "",
    expDate: "",
    
  });

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy emp details to newEmp obj
    const newCrd = {...crd };

    //newEmp.empId =10;
    //newEmp["empId"] = 10;
    //update newEmp object
    newCrd[event.target.name] = event.target.value;

    // update emp obj with newEmp obj details
    setCard(newCrd);
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
      .post("http://localhost:8081/CardDetails", newCrd)
      .then((res) => {
        console.log(res);
        alert("submitted  successfully!");
        navigate("/viewCard");
      })
      .catch((error) => console.log(error));
  };
  console.log(crd);
  return (
    <div>
        <form class="w-25 mx-auto border border-secondary rounded mt-4 p-2 shadow-lg p-3 mb-5 bg-body rounded"onSubmit={handleSubmit}>
          <p class="text-center fs-4 bg-secondary text-white">PayWithCard </p>
    
       
        <div className="mb-3">
          <label htmlFor="cardId" className="form-label float-start">
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
            CardBankName
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
          <label htmlFor="name" className="form-label float-start">
            CardHolderName
          </label>
          <input
            type="text"
            className="form-control"
            id="cardHolderName"
            value={crd.cardHolderName}
            name="cardHolderName"
            onChange={handleChange}
          />
          
           </div>
        
        <div className="mb-3">
          <label htmlFor="cardNo" className="form-label float-start">
            cardNo
          </label>
          <input
            type="number"
            className="form-control"
            id="cardNo"
            name="cardNo"
            value={crd.cardNo}
            onChange={handleChange}
          />
        </div>

        
        <div className="mb-3">
          <label htmlFor="cvv" className="form-label float-start">
            cvv
          </label>
          <input
            type="number"
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
       
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PayWithCard;