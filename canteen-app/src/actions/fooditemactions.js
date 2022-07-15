import axios from "axios";

// action to get all fooditems
export const getAllFoodItemsAction = () => async (dispatch) => {
  const response = await axios.get("http://localhost:8081/CanteenFood");
  console.log(response.data);
  dispatch({
    type: "GET_FOOD_ITEMS",
    payload: response.data,
  });
};

// Get product by id action
export const getFoodItemByIdAction = (id) => async (dispatch) => {
  const result = await axios.get("http://localhost:8081/CanteenFood/" + id);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "GET_FOOD_ITEM",
    payload: result.data,
  });
};