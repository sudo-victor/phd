import { combineReducers } from "redux";

import product from "./product";
import seller from "./seller";

export default combineReducers({
  product,
  seller,
});
