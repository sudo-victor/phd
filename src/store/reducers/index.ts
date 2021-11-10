import { combineReducers } from "redux";

import daily from "./daily";
import product from "./product";
import seller from "./seller";

export default combineReducers({
  daily,
  product,
  seller,
});
