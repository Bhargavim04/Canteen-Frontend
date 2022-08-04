import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCustomerByEmailAction } from "../actions/loginactions";
import { useSelector , useDispatch} from "react-redux";
import { store } from "../index";

import OrderTable from "./OrderTable";

const Order = () => {
 const [ order,setOrder ] = useState({
  "cusId": 0,
  "foodItems": [
    {
      "foodId": 0,
      "foodName": "string",
      "foodImage": "string",
      "foodPrice": 0,
      "foodQty": 0,
      "itemTotalPrice": 0
    }
  ]});
  const dispatch = useDispatch();
  // get login info from store
  const login = useSelector((state) => state.custstore.login);
  // get cust details based on email using dispatch action
  useEffect(() => {
    const email = store.getState().custstore.login.email;
    dispatch(getCustomerByEmailAction(email));
  }, []);
  // get cust details from store
  const cus = useSelector((state) => state.custstore.customer);

  useEffect(() => {
    axios.post("http://localhost:8081/order/dto",order)
  });
    
  return (
    <div className="w-50 mx-auto">
      <h4 className="mt-3">Order Placed Successfully..</h4>
      
    </div>
  );
};

export default Order;
