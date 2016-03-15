import { createAction } from "redux-actions";
import localforage from "localforage";

import {
  LOAD_CITIES,
  SELECT_CITY
} from "../constants/cities";

const loadCitiesAction = createAction(LOAD_CITIES);
const selectCityAction = createAction(SELECT_CITY);

export function addCity(city) {
  return async function(dispatch) {
    try {
      const cities = (await localforage.getItem("cities")) || [];

      if (cities.indexOf(city) === -1) {
        cities.push(city);
      }

      await localforage.setItem("cities", cities);

      dispatch(loadCitiesAction(cities));

      return cities;
    } catch (error) {
      return;
    }
  };
}

export function loadCities() {
  return async function(dispatch) {
    const cities = (await localforage.getItem("cities")) || [];

    dispatch(loadCitiesAction(cities));

    return cities;
  };
}

export function selectCity(city) {
  return (dispatch) => {
    dispatch(selectCityAction(city));

    return city;
  };
}
