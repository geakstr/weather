import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import * as weatherActions from "../actions/weather";

export default class WeatherComponent extends React.Component {
  componentWillMount() {
    this.props.actions.fetchWeather(this.props.city);
  }

  render() {
    const { data, loading, error } = this.props.state;

    if (loading) {
      return <span>Loading…</span>
    }

    return (
      <span>{data.temp} °C</span>
    );
  }
}

function mapStateToProps({ weather }) {
  return { state: weather };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(weatherActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherComponent);
