import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

// const store = createStore(rootReducer, applyMiddleware(logger));

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger, thunk)
    // other store enhancers if any
  )
);

export default store;
