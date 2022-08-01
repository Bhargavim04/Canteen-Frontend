import { combineReducers } from "redux";
import fooditemReducer from "./fooditemsreducer";
import  loginReducer  from "./loginreducer";
import addressReducer from "./addressreducer";
import customerReducer from "./customerreducer";

const rootReducer = combineReducers({
  fooditemstore: fooditemReducer,
  custstore: loginReducer,
  customer: customerReducer,
  address: addressReducer
});

export default rootReducer;