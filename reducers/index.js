import { combineReducers } from "redux";
import products from "./products";
import productReducers from "./productList";

export default combineReducers({
  products,
  productList: productReducers
});
