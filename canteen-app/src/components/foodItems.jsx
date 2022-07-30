import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAllFoodItemsAction } from '../actions/fooditemactions';
import { Link } from "react-router-dom";

const FoodItems = () => {
    const dispatch = useDispatch();
  //useEffect(func, [conditional stmt])
  // dispatches getAllProductsAction at the time of page loading
  useEffect(() => {
    dispatch(getAllFoodItemsAction());
  }, []);

  // get products info from redux store
  const foodItems1 = useSelector((state) => state.fooditemstore.fooditems);
  console.log(foodItems1);
    return ( 
        <div className="container mt-3">
      <div className="row">
        <div className="col-sm-12 col-md-10">
          <div className="row">
            {foodItems1.map((food) => (
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-start mb-4 ">
                {/* <Link
                  to={`/fooditems/get/${food.foodId}`}
                  style={{ textDecoration: "none" }}
                > */}
                  <div className="card h-100 ">
                    <img
                      src={food.foodImage}
                      className="card-img-top"
                      alt={food.foodName}
                      width="200px"
                      height="200px"
                    />
                    <div className="card-body">
                      <small className="card-title">{food.foodName}</small>
                    </div>
                    <small className="card-title ms-3">
                      <i className="bi bi-currency-rupee"></i>
                      {food.foodPrice}
                    </small>
                    <Link to="/cart" class="btn btn-primary " aria-current="page">Add To Food Cart</Link>
                  </div>
                {/* </Link> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default FoodItems;