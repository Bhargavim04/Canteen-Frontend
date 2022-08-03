import React, { useState, useEffect }  from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// const PaymentForm = () => {
//     const params = useParams();
//     let navigate = useNavigate();
//     console.log(params);

//     // define state
//     const [payment, setPayment] = useState({
//     paymentId: "",
//     cardNo: "",
//     email: "",
//     totalPayment: "",
//     paymentType: "",
//     country: "",
//     postalCode: "",
//     });

//     //useEffect(callback function,[condition] )
//     // get existing payment details using id and update payment state obj
//     useEffect(() => {
//     axios
//       .get(`http://localhost:8081/payment/${params.id}`)
//       .then((res) => setPayment(res.data))
//       .catch((err) => console.log(err));
//     }, []);

    
  

//     const handleChange = (event) => {
//     console.log(event.target.name); // returns field name
//     console.log(event.target.value); // retruns filed value

//     // copy payment details to newCus obj
//     const newPayment = { ...payment };

//     newPayment[event.target.name] = event.target.value;

//     // update payment obj with newPayment obj details
//     setPayment(newPayment);
//     };

//     const handleSubmit = (event) => {
//     event.preventDefault();
//     // send put request to update
//     axios
//       .put(`http://localhost:8081/payment/${params.id}`, payment)
//       .then((res) => {
//         console.log(res);
//         // alert user with msg
//         alert("Transaction your payment " + res.data.payment + " successfully!");
//         // redirect to view payments page
//         navigate("/payments/view");
//       })
//       .catch((error) => console.log(error));
//   };
const PaymentForm = () => {
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
   country: "",
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
    //axios.post(url, pay);
    const newPayment = {
      paymentId: payment.paymentId,
      cardNo: payment.cardNo,
      email: payment.email,
      totalPayment: payment.totalPayment,
      paymentType: payment.paymentType,
      // country: payment.country,
      postalCode: payment.postalCode,
    };
    // validate form data using validate method
    //const result = validate();
    //console.log(result);

    axios
      .post("http://localhost:8081/payment", newPayment)
      .then((res) => {
        console.log(res);
        alert("Transaction payment " + res.data.paymentId + " successfully!");
        navigate("/payments");
      })
      .catch((error) => console.log(error));
  };
  console.log(payment);
    return ( 
        <div>
        <form className="w-25 mx-auto border border-primary m-2 px-3 pb-2 shadow-lg p-3 mb-5 bg-body rounded" 
        onSubmit={handleSubmit}>
        <p className="text-center fs-4 fw-bold text-decoration-underline">Transaction payment</p>
        <div className="mb-3 text-warning">
           <label htmlFor="paymentId" className="form-label ms-2 float-start">
             Payment Id </label>
           <input type="number" 
           className="form-control" 
           id="paymentId" 
           value={payment.paymentId}
           name="paymentId"
           onChange={handleChange}
           required />
        </div>

        <div className="mb-3 text-success">
           <label htmlFor="cardNo" className="form-label ms-2 float-start">
             cardNo </label>
           <input type="number" 
           className="form-control" 
           id="cardNo" 
           value={payment.cardNo}
           name="cardNo"
           onChange={handleChange}
           required />
        </div>

        <div className="mb-3 ">
           <label htmlFor="email" className="form-label ms-2 float-start">
             email </label>
           <input type="text" 
           className="form-control" 
           id="email" 
           value={payment.email}
           name="email"
           onChange={handleChange}
           required />
        </div>
        <div className="mb-3 ">
           <label htmlFor="totalPayment" className="form-label ms-2 float-start">
            Total Payment </label>
           <input type="text" 
           className="form-control" 
           id="totalPayment" 
           value={payment.totalPayment}
           name="totalPayment"
           onChange={handleChange}
           required />
        </div>
        <div className="mb-3 text-danger">
            <label htmlFor="paymentType" className="form-label float-start">
            Payment Type</label> 
            <i class="bi bi-credit-card-2-front-fill"></i>
            <input type="text" 
            className="form-control" 
            id="paymentType"
            value={payment.paymentType}
            name="paymentType"
            onChange={handleChange} 
            required />
          </div>

          {/* <div className="mb-3 bg-success">
           <label htmlFor="country" className="form-label ms-2 float-start">
             country </label>
             
            <select class="form-select" aria-label="Default select example">
                  <option selected>Country or region</option>
                  <option value="1">Afghanistan</option>
                  <option value="2">Belize</option>
                  <option value="3">Canada</option>
                  <option value="4">Denmark</option>
                  <option value="5">Egypt</option>
                  <option value="6">Fiji</option>
                  <option value="7">Gambia</option>
                  <option value="8">Haiti</option>
                  <option value="9">India</option>
                  <option value="10">Japan</option>
              </select><div class="d-grid gap-2 mt-3">
                </div>
        </div> */}
        <div className="mb-3 ">
           <label htmlFor="postalCode" className="form-label ms-2 float-start">
             postalCode </label>
           <input type="number" 
           className="form-control" 
           id="postalCode" 
           value={payment.postalCode}
           name="postalCode"
           onChange={handleChange}
           required />
        </div>
  <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">Pay</button>
        </div>
      </form>
      </div>
     );
    }

 
export default PaymentForm;