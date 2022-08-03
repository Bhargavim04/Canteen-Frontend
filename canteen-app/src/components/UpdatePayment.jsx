import React, { useState, useEffect }  from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdatePayment = () => {

    const params = useParams();
    let navigate = useNavigate();
    console.log(params);

    // define state
    const [payment, setPayment] = useState({
    paymentId: "",
    cardNo: "",
    email: "",
    totalPayment: "",
    paymentType: "",
    //country: "",
    postalCode: "",
    });

    //useEffect(callback function,[condition] )
    // get existing payment details using id and update payment state obj
    useEffect(() => {
    axios
      .get(`http://localhost:8081/payment/${params.id}`)
      .then((res) => setPayment(res.data))
      .catch((err) => console.log(err));
    }, []);

    const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy payment details to newCus obj
    const newPayment = { ...payment };

    newPayment[event.target.name] = event.target.value;

    // update payment obj with newPayment obj details
    setPayment(newPayment);
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    // send put request to update
    axios
      .put(`http://localhost:8081/payment/${params.id}`, payment)
      .then((res) => {
        console.log(res);
        // alert user with msg
        alert("Updated details of  " + res.data.paymentId + " successfully!");
        // redirect to view payments page
        navigate("/payments/view");
      })
      .catch((error) => console.log(error));
  };
    return ( 
        <div>
        <form className="w-25 mx-auto border border-primary m-2 px-3 pb-2 shadow-lg p-3 mb-5 bg-body rounded" 
        onSubmit={handleSubmit}>
        <p className="text-center fs-4 fw-bold text-decoration-underline">Update details</p>
        <div className="mb-3 bg-success">
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

        <div className="mb-3 bg-warning">
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

        <div className="mb-3 bg-danger">
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
        <div className="mb-3 bg-warning">
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
        <div className="mb-3 bg-danger">
            <label htmlFor="paymentType" className="form-label float-start">
            Payment Type </label>
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
           <input type="text" 
           className="form-control" 
           id="country" 
           value={payment.country}
           name="country"
           onChange={handleChange}
           required />
        </div> */}
        <div className="mb-3 bg-warning">
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
        <button type="submit" className="btn btn-primary">Update</button>
        </div>
      </form>
      </div>
     );
}
 
export default UpdatePayment;