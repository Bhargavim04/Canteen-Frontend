import React, { useEffect, useState } from "react";
import axios from "axios";

import OrderTable from "./OrderTable";

const Order = () => {
  const [orders, setOrders] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8083/order")
      .then((response) => {
        console.log(response);
        setOrders(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // Delete Employee
  const handleDelete = (orderId) => {
    axios
      .delete(`http://localhost:8083/order/${orderId}`)
      .then((res) => {
        console.log(res);
        // return all orders except emp which is selected for delete
      })
      .catch((err) => console.log(err));
    const filteredOrders = orders.filter((order) => order.orderId != orderId);
    // update state object with orders
    setOrders(filteredOrders);
    alert("Order with orderId " + orderId + " deleted successfully!");
  };

  console.log("orders", orders);

  return (
    <div className="w-50 mx-auto">
      <h4 className="mt-3">Order Details</h4>
      {orders && <OrderTable orders={orders} handleDelete={handleDelete} />}
    </div>
  );
};

export default Order;
