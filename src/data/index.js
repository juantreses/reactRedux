import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import countReducer from "./count";
import friendsReducer from "./friends";
import filtersReducer from "./filters";

export default createStore(
  combineReducers(
    {
      count: countReducer,
      friends: friendsReducer,
      filters: filtersReducer,
    },
    applyMiddleware(thunk)
  )
);
