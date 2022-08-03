 import React, { useState, useEffect }  from 'react';
import { useParams, useNavigate } from "react-router-dom";
 import axios from "axios";
import { Link } from "react-router-dom";

const NewPayment = () => {
   // value, name, handleOnChange(), handleSubmit()
   // react hook methods - useState() - define state of component
   // useEffect() - called at the time of page loading and when there is change in state

   // Define state using useState
   let navigate = useNavigate();

  const [payment, setPayment] = useState({
    // AccountNo: "",
    // GooglepayUPI: "",
    // UPI: "",
    // Wallets: "",
    Creditcard:"",
    Debitcard:"",
    ATMcard: "",
    Netbanking: "",
    Cash: "",
        
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
    //axios.post(url, pay);
    const newPayment = {
    //   AccountNo: payment.AccountNo,
    //   GooglepayUPI: payment.GooglepayUPI,
    //   UPI: payment.UPI,
    //   Wallets: payment.Wallets,
      Creditcard: payment.Creditcard,
      Debitcard:payment.Debitcard,
      ATMcard:payment.ATMcard,
      Netbanking:payment.Netbanking,
      Cash:payment.Cash,
    
    };
    // validate form data using validate method
    //const result = validate();
    //console.log(result);

    axios
      .post("http://localhost:8081/payment", newPayment)
      .then((res) => {
        console.log(res);
        alert("Order " + res.data.paymentId + " successfully!");
        navigate("/payments");
      })
      .catch((error) => console.log(error));
  };
  console.log(payment);
    return ( 
        <div>

            <form className="w-25 mx-auto border border-primary m-2 px-3 pb-2 shadow-lg p-3 mb-5 bg-body rounded" 
        onSubmit={handleSubmit}>
            
          <div>
        <Link to={`/card`}>
                  <i className="bi bi-circle me-3"></i>
                </Link>
        {/* <div className="mb-3" class="bi bi-circle" type="button"> */}
           <label htmlFor="Creditcard" className="form-label ms-2 float-start">
              Creditcard</label>
           </div><br/>

          <div>
             <Link to={`/card`}>
                  <i className="bi bi-circle me-3"></i>
                </Link>
           <label htmlFor="Creditcard" className="form-label ms-2 float-start">
              Debitcard</label>
           </div><br/>

           <div>
            <Link to={`/card`}>
                  <i className="bi bi-circle me-3"></i>
                </Link>
           <label htmlFor="Creditcard" className="form-label ms-2 float-start">
              ATM Card</label>
           </div><br/>


        <div>
        <Link to={`/card`}>
                  <i className="bi bi-circle me-3"></i>
                </Link>
  
        <label htmlFor="Net Banking" className="form-label ms-2 float-start">
        Net Bank</label>
        </div><br/>

               <div>
                <Link to={`/order`}>
                <i className="bi bi-circle me-3"></i>
                </Link>
                
        <label htmlFor="Cash " className="form-label ms-2 float-start">
         Cash Pay</label>
        </div>
        </form> 
      </div>
     );
    }

 
export default NewPayment;