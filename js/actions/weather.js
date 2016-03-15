import axios from "axios";
import { createAction } from "redux-actions";

import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../constants/weather";

const fetchRequestAction = createAction(FETCH_REQUEST);
const fetchSuccessAction = createAction(FETCH_SUCCESS);
const fetchFailureAction = createAction(FETCH_FAILURE);

export function fetchWeather(city) {
  return async function(dispatch) {
    try {
      dispatch(fetchRequestAction());

      const apiUrl = "http://api.openweathermap.org/data/2.5/weather";
      const apiKey = "f25a228a06873a4a5adbd855d527366e";
      const query = `?q=${city}&units=metric&APPID=${apiKey}`;
      const url = `${apiUrl}${query}`;

      const response = await axios.get(url);
      if (response.status !== 200) throw new Error();

      const temp = response.data.main.temp;

      dispatch(fetchSuccessAction({ temp }));
    } catch (error) {
      dispatch(fetchFailureAction(`Failure to fetch weather for ${city}`));
    }
  }
}
