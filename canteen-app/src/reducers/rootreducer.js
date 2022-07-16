import { combineReducers } from "redux";
import productReducer from "./productsreducer";
import fooditemReducer from "./fooditemsreducer";
import { loginReducer } from "./loginreducer";

const rootReducer = combineReducers({
  fakestore: productReducer,
  fooditemdb: fooditemReducer,
  login: loginReducer
});

export default rootReducer;