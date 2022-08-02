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
import { delFromCart, remove } from "../actions/cartactions";
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
      price = ele.itemTotalPrice * ele.foodQty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    cartTotal();
  }, [cartTotal]);

  // decreasing quantity
  const decrement = (item) => {
    dispatch(remove(item));
  };

  return (
    <div>
      <div className="container mt-2">
        <h1 className="text-center">Cart-Page</h1>
        <section className="container mt-3">
          <div className="itemdetails">
            <p className="text-center">
              <strong>Cart-Total: </strong>₹{price}
            </p>
            {getData.map((ele) => {
              return (
                <>
                  <div className="item_img">
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <div>
                            <img
                              src={ele.foodImage}
                              className="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div className="details">
                            <div className="col-md-8">
                              <div className="card-body">
                                <h5 className="card-title">{ele.foodName}</h5>
                                <p className="card-text">
                                  Price: ₹{ele.foodPrice}
                                </p>
                                <p>
                                  Item-Total: ₹
                                  {ele.itemTotalPrice * ele.foodQty}
                                </p>
                                <p className="card-text">
                                  Quantity: {ele.foodQty}
                                </p>
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
                                    style={{ fontSize: 24 }}
                                    onClick={
                                      ele.foodQty < 1
                                        ? () => dlt(ele)
                                        : () => decrement(ele)
                                    }
                                  >
                                    -
                                  </span>
                                  <span style={{ fontSize: 22 }}>
                                    {ele.foodQty}
                                  </span>
                                  <span
                                    style={{ fontSize: 24 }}
                                    onClick={() => send(ele)}
                                  >
                                    +
                                  </span>
                                </div>
                                <p>
                                  <strong>Remove: </strong>
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
