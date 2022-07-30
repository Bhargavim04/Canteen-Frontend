import { combineReducers } from "redux";
import fooditemReducer from "./fooditemsreducer";
import  loginReducer  from "./loginreducer";
import addressReducer from "./addressreducer";

const rootReducer = combineReducers({
  fooditemstore: fooditemReducer,
  custstore: loginReducer,
  address: addressReducer
});

export default rootReducer;