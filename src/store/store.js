import reducer from "./reducer";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";


const store = createStore(reducer, applyMiddleware(logger));

export default store;
