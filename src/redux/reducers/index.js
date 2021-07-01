import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

// combineReducers take an object
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default reducers;
