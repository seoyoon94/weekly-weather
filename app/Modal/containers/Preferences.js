import React from 'react';
import { connect } from 'react-redux';
import { Modal } from '../components';
import { savePreferences } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    preferences: state.preferences
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    savePreferences: (preferences) => dispatch(savePreferences(preferences))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
