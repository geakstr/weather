import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import weatherReducer from "./weather";
import citiesReducer from "./cities";

export default combineReducers({
  routing: routerReducer,
  weather: weatherReducer,
  cities: citiesReducer
});
