import { handleActions } from "redux-actions";

import {
  LOAD_CITIES,
  SELECT_CITY
} from "../constants/cities";

const initialState = {
  cities: [],
  current: null
};

const citiesReducer = handleActions({
  [LOAD_CITIES]: (state, action) => Object.assign({}, state, {
    cities: action.payload
  }),
  [SELECT_CITY]: (state, action) => Object.assign({}, state, {
    current: action.payload
  })
}, initialState);

export default citiesReducer;
