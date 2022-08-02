import { combineReducers } from "redux";
import fooditemReducer from "./fooditemsreducer";
import  loginReducer  from "./loginreducer";

const rootReducer = combineReducers({
  fooditemstore: fooditemReducer,
  custstore: loginReducer,
});

export default rootReducer;