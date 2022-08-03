import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
//import Product from "./products";
import { addToCart } from "../actions/cartactions";
import { connect, useSelector, useDispatch } from "react-redux";
//import { getAllProductsAction } from "../actions/productactions";
import { handleButton } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { delFromCart, decByOne } from "../actions/cartactions";
import FoodItems from "./foodItems";

const Cart = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  //  console.log(data);

  // for getting data from carts
  const getData = useSelector((state) => state.cartReducer.carts);
  //  console.log(getData);

  //add data
  const send = (e) => {
    // console.log(e);
    dispatch(addToCart(e));
  };

  //if cart is empty after deleting the page should move to products page
  const history = useNavigate();

  //for deleting the item from cart
  const dlt = (foodId) => {
    dispatch(delFromCart(foodId));
    history("/");
  };

  const [price, setPrice] = useState(0);
  console.log(price);
  // Setting price of items
  const cartTotal = () => {
    let price = 0;
    getData.map((ele, k) => {
      price = ele.foodPrice * ele.foodQty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    cartTotal();
  }, [cartTotal]);

  // decreasing quantity
  const decrement = (item) => {
    dispatch(decByOne(item));
  };

  return (
    <div>
      <h1>Cart-Items</h1>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-12 col-md-10">
            <div className="row">
              <p className="text-center">
                <strong>Cart-Total: </strong>₹{price}
              </p>
              <hr />
              {getData.map((ele) => {
                return (
                  <div className="col-md-3 mb-4">
                    <div className="card h-100 text-center p-4">
                      <img
                        src={ele.foodImage}
                        className="img-fluid rounded-start"
                        alt={ele.foodName}
                        height="250px"
                      />
                      <div className="card-body">
                        <h5 className="card-title mb-0">{ele.foodName}</h5>
                        <p className="card-text lead fw-bold">
                          Price: ₹{ele.foodPrice}
                        </p>
                        <p className="card-text lead fw-bold">
                          Item-Total: ₹{ele.foodPrice * ele.foodQty}
                        </p>
                        <p className="card-text lead fw-bold">
                          Quantity: {ele.foodQty}
                        </p>
                        <p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              className="btn btn-outline-dark"
                              style={{ fontSize: 24 }}
                              onClick={
                                ele.foodQty <= 1
                                  ? () => dlt(ele.foodId)
                                  : () => decrement(ele)
                              }
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{ele.foodQty}</span>
                            <span
                              className="btn btn-outline-dark"
                              style={{ fontSize: 24 }}
                              onClick={() => send(ele)}
                            >
                              +
                            </span>
                          </div>
                        </p>
                        <p className="card-text lead fw-bold">
                          Remove:
                          <span>
                            <i
                              className="bi bi-trash3"
                              style={{
                                fontSize: 25,
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(ele.foodId)}
                            ></i>
                          </span>
                        </p>
                        <NavLink to={"/order"} className="btn btn-outline-dark">
                          Proceed To Order
                        </NavLink>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
