import { combineReducers } from "redux";
import auth from "./auth";
import cart from "./cart/cartSlice";
import products from "./products/productSlice";

const rootReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    auth,
    cart,
    products,
    ...asyncReducers,
  });
  return combinedReducer(state, action);
};

export default rootReducer;
