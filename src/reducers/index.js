import { combineReducers } from "redux";
import products from './products';
import bag from './bag';

export default combineReducers({
  products,
  bag
});