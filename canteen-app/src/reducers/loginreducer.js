const initialState = {
  customer: {},
  login: {},
  errMsg: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, customer: action.payload };
    case "LOGIN":
      return { ...state, login: action.payload };
    case "ERR_RES":
      return { ...state, errMsg: action.payload };  
    case "LOGOUT":
      return { ...state, login: action.payload };
    case "GET_CUS_PROFILE":
      return { ...state, customer: action.payload };
    default:
      return state;
  }
};