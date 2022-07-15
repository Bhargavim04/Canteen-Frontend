const initialState = {
  fooditems: [],
  fooditem: {},
};

const fooditemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FOOD_ITEMS":
      return { ...state, fooditems: action.payload };
    case "GET_FOOD_ITEM":
      return { ...state, fooditem: action.payload };
    default:
      return state;
  }
};

export default fooditemReducer;