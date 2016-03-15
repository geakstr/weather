import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "react-router-redux";
import promiseMiddleware from "redux-promise";
import thunk from "redux-thunk";

import reducers from "./reducers";

export default function store(browserHistory) {
  const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk, routerMiddleware(browserHistory));

  return createStoreWithMiddleware(createStore)(reducers);
}
