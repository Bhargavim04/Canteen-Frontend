import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const OrderForm = () => {
  const params = useParams();
  let navigate = useNavigate();
  console.log(params);

  // define state
  const [order, setOrder] = useState({
    orderId: "",
    customerName: "",
    items: "",
    price: "",
    date: "",
  });

  //useEffect(callback function,[condition] )
  // get existing payment details using id and update payment state obj
  useEffect(() => {
    axios
      .get(`http://localhost:8083/order/${params.id}`)
      .then((res) => setOrder(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy payment details to newCus obj
    const newOrder = { ...order };

    newOrder[event.target.name] = event.target.value;

    // update payment obj with newPayment obj details
    setOrder(newOrder);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send put request to update
    axios
      .put(`http://localhost:8083/order/${params.id}`, order)
      .then((res) => {
        console.log(res);
        // alert user with msg
        alert("Updated details of  " + res.data.orderId + " successfully!");
        // redirect to view payments page
        navigate("/orders/view");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <form
        className="w-25 mx-auto border border-primary m-2 px-3 pb-2 shadow-lg p-3 mb-5 bg-body rounded"
        onSubmit={handleSubmit}
      >
        <p className="text-center fs-4 fw-bold text-decoration-underline">
          Update details
        </p>
        <div className="mb-3 bg-success">
          <label htmlFor="orderId" className="form-label ms-2 float-start">
            Order Id
          </label>
          <input
            type="number"
            className="form-control"
            id="orderId"
            value={order.orderId}
            name="orderId"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 bg-warning">
          <label htmlFor="customerName" className="form-label ms-2 float-start">
            customerName
          </label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            value={order.customerName}
            name="customerName"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 bg-danger">
          <label htmlFor="items" className="form-label ms-2 float-start">
            items
          </label>
          <input
            type="text"
            className="form-control"
            id="items"
            value={order.items}
            name="items"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 bg-warning">
          <label htmlFor="price" className="form-label ms-2 float-start">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={order.price}
            name="price"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 bg-danger">
          <label htmlFor="date" className="form-label float-start">
            Date
          </label>
          <input
            type="text"
            className="form-control"
            id="date"
            value={order.date}
            name="date"
            onChange={handleChange}
            required
          />
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

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
