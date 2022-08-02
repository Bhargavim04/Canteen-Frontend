import axios from "axios";

// action to get all addresses
export const getAllAddressesAction = () => async (dispatch) => {
  const response = await axios.get("http://localhost:8081/addresses");
  console.log(response.data);
  dispatch({
    type: "GET_ADDRESSES",
    payload: response.data,
  });
};

// add address
export const addressAction = (customer,cusId) => async (dispatch) => {
  const result = await axios.patch(`http://localhost:8081/customer/addr/${cusId}`,customer);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "ADD_ADDRESS",
    payload: result.data,
  });
};