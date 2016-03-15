import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import City from "./City";
import * as citiesActions from "../actions/cities";

export default class CitiesComponent extends React.Component {
  componentWillMount() {
    const { actions, state } = this.props;

    actions.loadCities().then((cities) => {
      const currentCity = state.current || cities[0] || null;

      return actions.selectCity(currentCity);
    });
  }

  render() {
    const { cities, current } = this.props.state;
    const { actions } = this.props;

    return (
      <div>
        {cities.map((city) => {
          return <City key={city} name={city} current={current} selectCity={actions.selectCity} />
        })}
      </div>
    );
  }
}

function mapStateToProps({ cities }) {
  return { state: cities };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(citiesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesComponent);
