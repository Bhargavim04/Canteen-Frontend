const initialState = {
  customer: {},
  login: {},
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, customer: action.payload };
    case "LOGIN":
      return { ...state, login: action.payload };
    case "LOGOUT":
      return { ...state, login: action.payload };
    default:
      return state;
  }
};