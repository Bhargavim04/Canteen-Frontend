import { combineReducers } from "redux";
import productReducer from "./productsreducer";
import fooditemReducer from "./fooditemsreducer";
import { loginReducer } from "./loginreducer";
import addressReducer from "./addressreducer";

const rootReducer = combineReducers({
  fakestore: productReducer,
  fooditemdb: fooditemReducer,
  login: loginReducer,
  address: addressReducer
});

export default rootReducer;