import { createStore, combineReducers, applyMiddleware } from "redux";
import customersReducers from "./customers/reducer";
import teetimesReducer from "./teetimes/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  customers: customersReducers,
  teetimes: teetimesReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
