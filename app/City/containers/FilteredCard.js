import React from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card';

const mapStateToProps = (state, ownProps) => {
  return {
    preferences: state.preferences,
    data: ownProps.data
  };
};

export default connect(
  mapStateToProps
)(Card);
