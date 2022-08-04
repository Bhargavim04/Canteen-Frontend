import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { menuItems } from "./UpdateOrder";
import { useState, useEffect } from "react";
const AddOrders = () => {
  const [orderId, setOrderId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [cartItems, setCartItems] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add Axios Call
    axios
      .post("http://localhost:8083/order", {
        orderId,
        customerName,
        cartItems,
        price,
        date,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    alert("Order with orderId " + orderId + " added successfully!");
    navigate("/"); //change while integrate
  };

  return (
    <div className="w-50 mx-auto mt-3">
      <p className="display-6">Add New Order</p>
      <form className="border p-2">
        <div className="mb-3">
          <label for="exampleInputorderId" className="form-label float-start">
            orderId
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputorderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            name="orderId"
          />
        </div>

        <div className="mb-3">
          <label for="customerName" className="form-label float-start">
            customerName
          </label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            onChange={(e) => setCustomerName(e.target.value)}
            value={customerName}
            name="customerName"
          />
        </div>
        <div className="mb-3">
          <label for="catItems" className="form-label float-start">
            cartItems
          </label>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {cartItems}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {menuItems.map((item) => (
                <Dropdown.Item onClick={() => setCartItems(item)}>
                  {item}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="mb-3">
          <label for="exampleInputcreatedBy" className="form-label float-start">
            price
          </label>
          <input
            type="price"
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
            id="exampleInputaddress"
            name="price"
            value={price}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputdate" className="form-label float-start">
            date
          </label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            className="form-control"
            id="exampleInputdate"
            name="date"
            value={date}
          />
        </div>
        <div class="d-grid gap-2"></div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddOrders;
