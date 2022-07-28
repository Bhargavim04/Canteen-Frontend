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
// export const loginAction = (login) => async (dispatch) => {
//   const result = await axios.post("http://localhost:8081/login/dto", login);
//   console.log(result);
//   console.log(result.data);
//   dispatch({
//     type: "LOGIN",
//     payload: result.data,
//   });
// };

export const loginAction = (login) => (dispatch) => {
  axios
    .post("http://localhost:8081/login/dto", login)
    .then((res) => {
      console.log(res);
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error.response.data.message);
      dispatch({
        type: "ERR_RES",
        payload: error.response.data.message,
      });
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

// Get customer by id action
export const getCustomerByIdAction = (id) => async (dispatch) => {
  const result = await axios.get(`http://localhost:8081/customer/${id}`);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "GET_CUS_PROFILE",
    payload: result.data,
  });
};

// Get customer by email action
export const getCustomerByEmailAction = (email) => async (dispatch) => {
  const result = await axios.get(`http://localhost:8081/customer/email/${email}`);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "GET_CUS_BY_EMAIL",
    payload: result.data,
  });
};