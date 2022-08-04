import React from "react";
import { Link } from "react-router-dom";

const OrderTable = (props) => {
  return (
    <div>
      <Link to="/add" className="btn btn-primary float-end mb-2">
        Add
      </Link>
      <table className="table">
        <thead>
          <tr>
          <th>Order Id</th>
            <th>Customer Name</th>
            <th>Items</th>
            <th>Price</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {props.orders.map((order) => (
            <tr key={order.orderId}>
                <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.cartItems}</td>
              <td>{order.price}</td>
              <td>{order.date}</td>
              <td>
                <Link to={`/update/${order.orderId}`}>
                  <i className="bi bi-arrow-repeat me-3"></i>
                </Link>
                <i
                  className="bi bi-trash-fill"
                  type="button"
                  onClick={() => props.handleDelete(order.orderId)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/payment" className="btn btn-primary float-end mb-2">
        Proceed
      </Link>
    </div>
  );
};

export default OrderTable;