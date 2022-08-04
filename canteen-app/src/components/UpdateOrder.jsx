import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";

export const menuItems = ["vada", "idli", "poori", "dosa"];
const UpdateOrder = () => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);

  // define state

  const [order, setOrder] = useState({
    orderId: params.id,
    customerName: "",
    cartItems: "",
    price: "",
    date: "",
  });

  // useEffect(callback function,[condition] )

  useEffect(() => {
    axios
      .get(`http://localhost:8083/order/${params.id}`)
      .then((res) => setOrder(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy emp details to newEmp obj
    const newOrder = { ...order };

    //newEmp.orderId =1;
    //newOrder["orderId"] = 10;
    //update newOrder object
    newOrder[event.target.name] = event.target.value;

    // update emp obj with newEmp obj details
    setOrder(newOrder);
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // send put request to update
  //     axios
  //       .put(`http://localhost:8083/order/dto/${params.id}`, order)
  //       .then((res) => {
  //         console.log(res);
  //         // alert user with msg
  //         alert("Updated order " + res.data.customerName + " successfully!");
  //         // redirect to order page
  //         navigate("/order");
  //       })
  //       .catch((error) => console.log(error));
  //   };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Update Axios Call
    axios
      .put(`http://localhost:8083/order/${params.id}`, order)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
    alert("Order with orderId " + order.orderId + " Updated successfully!");
    navigate("/"); //change while integrate
  };

  return (
    <div>
      <div className="w-50 mx-auto mt-3">
        <p className="display-6">Update Order</p>
        <form className="border p-3">
          {/*</div> onSubmit={handleSubmit}>*/}
          <div className="mb-3">
            <label htmlFor="customerName" className="form-label float-start">
              Order Id
            </label>
            <input
              type="text"
              className="form-control"
              id="orderId"
              value={order.orderId}
              name="orderId"
              onChange={handleChange}
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="customerName" className="form-label float-start">
              Customer Name
            </label>
            <input
              type="text"
              className="form-control"
              id="customerName"
              value={order.customerName}
              name="customerName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            {/* <label htmlFor="cartItems" className="form-label float-start">
              
            </label> */}
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {order.cartItems}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {menuItems.map((item) => (
                  <Dropdown.Item
                    onClick={() => setOrder({ ...order, cartItems: item })}
                  >
                    {item}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label float-start">
              Price
            </label>
            <input
              type="price"
              className="form-control"
              id="price"
              name="price"
              value={order.price}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label float-start">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              aria-describedby="date"
              value={order.date}
              name="date"
              onChange={handleChange}
            />
          </div>

          <div className="d-grid gap-2">
            <button onClick={handleUpdate} className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateOrder;
