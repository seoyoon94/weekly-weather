import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadWeather } from '../../actions';
import { Input } from '../../components';

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (city, country) => dispatch(loadWeather(city, country))
  }
};

export default connect(null, mapDispatchToProps)(Input);
