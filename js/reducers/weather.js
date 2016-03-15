import { handleActions } from "redux-actions";

import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../constants/weather";

const initialState = {
  data: {
    temp: 0
  },
  loading: true,
  error: null
};

const weatherReducer = handleActions({
  [FETCH_REQUEST]: (state, action) => Object.assign({}, state, {
    loading: true,
    error: null
  }),
  [FETCH_SUCCESS]: (state, action) => Object.assign({}, state, {
    data: action.payload,
    loading: false,
    error: null
  }),
  [FETCH_FAILURE]: (state, action) => Object.assign({}, state, {
    loading: false,
    error: action.payload
  })
}, initialState);

export default weatherReducer;
