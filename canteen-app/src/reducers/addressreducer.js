const initialState = {
  addresses: [],
  address: {}
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ADDRESSES":
      return { ...state, addresses: action.payload };
    case "ADD_ADDRESS":
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

export default addressReducer;