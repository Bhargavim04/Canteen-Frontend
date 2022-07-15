import { combineReducers } from "redux";
import productReducer from "./productsreducer";
import fooditemReducer from "./fooditemsreducer";

const rootReducer = combineReducers({
  fakestore: productReducer,
  fooditemdb: fooditemReducer
});

export default rootReducer;