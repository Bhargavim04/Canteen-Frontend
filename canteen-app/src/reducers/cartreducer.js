const INIT_STATE = {
  carts: [],
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.foodId === action.payload.foodId
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].foodQty += 1;
            return {
              ...state,
              carts:[...state.carts]
            }
      } else {
        const temp = { ...action.payload, foodQty: 1 };
        return {
          ...state,
          carts: [...state.carts, action.payload],
        };
     }

    case "DEL_FROM_CART":
      const data = state.carts.filter((el) => el.foodId !== action.payload);
      return {
        ...state,
        carts: data,
      };

      case "DEC_ONE":

      const itemIndex_dec = state.carts.findIndex(
        (item) => item.foodId === action.payload.foodId
      );

      if(state.carts[itemIndex_dec].foodQty >= 1 ) {
        const dltitem = state.carts[itemIndex_dec].foodQty -= 1
        console.log([...state.carts, dltitem]);
      
      return {
        ...state,
        carts:[...state.carts]
      } 
    } else if(state.carts[itemIndex_dec].foodQty === 1) {
      const data = state.carts.filter((el) => el.foodId !== action.payload);
      return {
        ...state,
        carts:data
      }
    }
    break;
    default:
      return state
  }
};

export default cartReducer;


