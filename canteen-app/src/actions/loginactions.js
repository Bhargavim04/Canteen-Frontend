import axios from "axios";

// Register
export const registerAction = (customer) => async (dispatch) => {
  const result = await axios.post("http://localhost:8081/customer/register",customer);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "REGISTER",
    payload: result.data,
  });
};

// login action
export const loginAction = (login) => async (dispatch) => {
  const result = await axios.post("http://localhost:8081/login/dto", login);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "LOGIN",
    payload: result.data,
  });
};

// logout action
export const logoutAction = (email) => async (dispatch) => {
  const result = await axios.patch(`http://localhost:8081/logout/${email}`);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "LOGOUT",
    payload: result.data,
  });
};