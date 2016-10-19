import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from '../../components';
import { removeCity } from '../../actions';

const mapDispatchToProps = (dispatch, getState) => {
  return {
    handleClick: bindActionCreators(removeCity, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Button);
