import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddFoodItem = () => {
    //value,name,handleOnChange(),handleSubmit()
    //react hook methods-useState()-define state of component
    //useEffect()-called at the time of page loading and when there change in state
     let navigate = useNavigate();
   const [food,setFood] =useState({
    foodName:"",
    foodPrice:"",
    foodQuantity:"",
   });

    const handleChange = (event) => {
     // console.log(event);
      console.log(event.target.name); //field name
      console.log(event.target.value); //field value

      const newFood={...food};
      newFood[event.target.name]=event.target.value;
      setFood(newFood);
   };

   const handleSubmit = (event) => {
    event.preventDefault();
     const newFood = {
        foodName :food.foodName,
        foodPrice :food.foodPrice,
        foodQuantity :food.foodQuantity,
        foodImage :food.foodImage,
     };
     axios
    .post("http://localhost:8081/CanteenFood",newFood)
    .then((res) => {
        console.log(res);
        alert("Added new foodItems" + res.data.foodName + "Successfully");
        navigate("/adminDashboard/foodMenu");
     })
     .catch((error) => console.log(error));
      };

    console.log(food);
    return ( 
        <div className="w-25 mx-auto border border-primary m-2 px-3 pb-2 shadow-lg p-3 mb-5 bg-body rounded">
            <p className="h3 bg-success">ADDNEW FOODITEM</p>
           <form className="border p-2" onSubmit={handleSubmit}>
           <div className="mb-3 ">
    <label  htmlFor="foodName" className="form-label float-start">FoodName</label>
    <input type="text" 
    className="form-control"
     id="ExampleINputName"
      value={food.foodName}
      name="foodName"
      onChange={handleChange}
      />
  </div>
  <div className="mb-3">
    <label  htmlFor="foodPrice" className="form-label  float-start">FoodPrice</label>
    <input
     type="number"
      className="form-control" 
      id="ExampleInputPrice"
       value={food.foodPrice}
       name="foodPrice"
       onChange={handleChange}
       />
  </div>
  {/* <div className="mb-3">
    <label htmlFor="foodQuantity" className="form-label  float-start">FoodQuantity</label>
    <input 
    type="number"
     className="form-control"
      id="ExampleInputQuantity" 
      value={food.foodQuantity}
      name="foodQuantity"
      onChange={handleChange}
      />
  </div> */}
  <div className="mb-3">
    <label  htmlFor="foodimage" className="form-label float-start">FoodImage</label>
    <input type="text" 
    className="form-control"
     id="ExampleINputName"
      value={food.foodImage}
      name="foodImage"
      onChange={handleChange}
      />
  </div>
  <div className="d-grid gap-2">
  <button type="submit" className="btn  btn-success sm-2">Add</button>
  </div>
</form>
        </div>
     );
}
 
export default AddFoodItem;