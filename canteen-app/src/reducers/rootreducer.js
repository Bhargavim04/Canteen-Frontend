import { combineReducers } from "redux";
import fooditemReducer from "./fooditemsreducer";
import  loginReducer  from "./loginreducer";
import addressReducer from "./addressreducer";
import cartReducer from "./cartreducer";

const rootReducer = combineReducers({
  fooditemstore: fooditemReducer,
  custstore: loginReducer,
  address: addressReducer,
  cartReducer
});

export default rootReducer;