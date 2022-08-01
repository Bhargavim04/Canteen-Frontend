import React, { useState, useEffect }  from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateFoodItem = () => {

    const params = useParams();
    let navigate = useNavigate();
    console.log(params);

    // define state
    const [food, setFood] = useState({
    foodId: "",
    foodName: "",
    foodPrice: "",
    foodQuantity: "",
    });

    //useEffect(callback function,[condition] )
    // get existing cus details using id and update cus state obj
    useEffect(() => {
    axios
      .get(`http://localhost:8081/CanteenFood/dto/${params.id}`)
      .then((res) => setFood(res.data))
      .catch((err) => console.log(err));
    }, []);

    const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy cus details to newCus obj
    const newFood = { ...food };

    newFood[event.target.name] = event.target.value;

    // update cus obj with newCus obj details
    setFood(newFood);
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    // send put request to update
    axios
      .put(`http://localhost:8081/CanteenFood/dto/${params.id}`, food)
      .then((res) => {
        console.log(res);
        // alert user with msg
        alert("Updated details of " + res.data.foodName + " successfully!");
        // redirect to view customers page
        navigate("/profile");
      })
      .catch((error) => console.log(error));
  };
    return ( 
        <div>
          
        <form className="w-25 mx-auto border border-primary m-2 px-3 pb-2 shadow-lg p-3 mb-5 bg-body rounded" 
        onSubmit={handleSubmit}>
        <p className="text-center fs-4 fw-bold text-decoration-underline">Update food details</p>
        <div className="mb-3">
           <label htmlFor="foodName" className="form-label ms-2 float-start">
            Food Name</label>
           <input type="text" 
           className="form-control" 
           id="foodName" 
           value={food.foodName}
           name="foodName"
           onChange={handleChange}
           required />
        </div>
        <div className="mb-3">
            <label htmlFor="foodPrice" className="form-label float-start">
            Food Price</label>
            <input type="text" 
            className="form-control" 
            id="foodPrice"
            value={food.foodPrice}
            name="foodPrice"
            onChange={handleChange} 
            required />
          </div>
          <div className="mb-3">
            <label htmlFor="foodQuantity" className="form-label float-start">
           Food Quantity</label>
            <input type="text" 
            className="form-control" 
            id="foodQuantity"
            value={food.foodQuantity}
            name="foodQuantity"
            onChange={handleChange} 
            required />
          </div>
        <div className="d-grid gap-2">
        <button type="submit" className="btn btn-success">Update</button>
        </div>
      </form>
      </div>
     );
}
 
export default UpdateFoodItem;