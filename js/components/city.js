import React from "react";
import WeatherComponent from "./weather";

export default class City extends React.Component {
  render() {
    const { name, current } = this.props;

    if (name === current) {
      return <div>{name} <WeatherComponent city={name} /></div>;
    }

    return <div>{name}</div>;
  }
}
