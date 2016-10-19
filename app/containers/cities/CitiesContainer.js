import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { CityList, Loading } from '../../components';

const mapStateToProps = (state, ownProps) => {
  return {
    cities: state.citiesByName
  };
}

export default connect(mapStateToProps)(CityList);
