import React, { PropTypes } from 'react';
import styles from './modal.scss';

import { ToggleSwitch } from '..';

//TODO: Make an input component that will accept props for the name
//      and dynamically create input forms utilizing computed property
//      keys by mapping over the state keys.
//


class ModalOverlay extends React.Component {
  render() {
    return (
      <div className={styles.overlay}>
        {this.props.children}
      </div>
    );
  }
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleChecked = this.toggleChecked.bind(this);
    this.onSavePreferences = this.onSavePreferences.bind(this);
  }

  componentWillMount() {
    this.setState({
      ...this.props.preferences
    });
  }

  toggleChecked(event) {
    this.setState({
      [event.target.name]: event.target.checked
    });
  }

  onSavePreferences(e) {
    e.preventDefault();
    this.props.savePreferences(this.state);
    this.context.router.push('/');
  }

  render() {
    let { savePreferences } = this.props;
    let state = this.state;
    return (
      <ModalOverlay>
        <div className={styles.modal}>
          <form onSubmit={this.onSavePreferences}>
            <fieldset>
              <legend>Temperatures:</legend>
              <ToggleSwitch 
                name="format" 
                checked={state.format} 
                onChange={this.toggleChecked}>
                Format
              </ToggleSwitch>
              <ToggleSwitch 
                name="daytemp" 
                checked={state.daytemp} 
                onChange={this.toggleChecked}>
                Day Temperature
              </ToggleSwitch>
              <ToggleSwitch 
                name="nighttemp" 
                checked={state.nighttemp} 
                onChange={this.toggleChecked}>
                Night Temperature
              </ToggleSwitch>
            </fieldset>
            <fieldset>
              <legend>Weather Conditions:</legend>
              <ToggleSwitch 
                name="description" 
                checked={state.description}
                onChange={this.toggleChecked}>
                Forecast
              </ToggleSwitch>
              <ToggleSwitch 
                name="pressure" 
                checked={state.pressure}
                onChange={this.toggleChecked}>
                Pressure
              </ToggleSwitch>
              <ToggleSwitch 
                name="humidity" 
                checked={state.humidity}
                onChange={this.toggleChecked}>
                Humidity
              </ToggleSwitch> 
              <ToggleSwitch 
                name="windspeed" 
                checked={state.windspeed}
                onChange={this.toggleChecked}>
                Wind Speed
              </ToggleSwitch>
              <ToggleSwitch 
                name="winddirection" 
                checked={state.winddirection}
                onChange={this.toggleChecked}>
                Wind Direction
              </ToggleSwitch>
            </fieldset>
            <button type="submit">OK</button>
          </form>
        </div>
      </ModalOverlay>
    )
  }
};

Modal.propTypes = {
  preferences: PropTypes.object.isRequired,
  savePreferences: PropTypes.func.isRequired
};

Modal.contextTypes = {
  router: PropTypes.object.isRequired
};
export default Modal;
