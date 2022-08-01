const initialState = {
  customer: {},
  customers: [],
  cust:{},
  addr:[],
  errMsg: "",
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, customer: action.payload };
    case "ERR_RES":
      return { ...state, errMsg: action.payload };  
    case "LOGOUT":
      return { ...state, login: action.payload };
    case "GET_CUS_PROFILE":
      return { ...state, customer: action.payload };
    case "GET_CUS_BY_EMAIL":
      return { ...state, customer: action.payload };
    case "GET_CUS_DETAILS_BY_EMAIL":
      return { ...state, cust: action.payload };
    case "GET_CUS_ADDR_BY_EMAIL":
      return { ...state, addr: action.payload };
    case "GET_ALL_CUSTOMERS":
      return { ...state, customers: action.payload };
    default:
      return state;
  }
};

export default customerReducer;