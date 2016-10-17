import React from 'react';
import { Button } from '../../components';
import { connect } from 'react-redux';
import { removeCity } from '../../actions';

const mapDispatchToProps = (dispatch, getState) => {
  return {
    handleClick: (city, country) => dispatch(removeCity(city, country))
  };
};

export default connect(null, mapDispatchToProps)(Button);
