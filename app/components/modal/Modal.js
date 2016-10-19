import React, { PropTypes } from 'react';
import styles from './modal.scss';

//TODO: When submit button is pressed, local state changes should
//      be saved into persistent storage.
//
//TODO: Make an input component that will accept props for the name
//      and dynamically create input forms utilizing computed property
//      keys by mapping over the state keys.
//
//TODO: Change the Cards to show only information that is stored in 
//      preferences.

const Checkbox = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.children}: </label>
      <input 
        type="checkbox" 
        id={props.name} 
        name={props.name} 
        checked={props.checked} 
        onChange={props.onChange} />
    </div>
  );
};

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

  renderCheckboxes() {
    
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
              <Checkbox 
                name="format" 
                checked={state.format} 
                onChange={this.toggleChecked}>
                Format
              </Checkbox>
              <Checkbox 
                name="daytemp" 
                checked={state.daytemp} 
                onChange={this.toggleChecked}>
                Day Temperature
              </Checkbox>
              <Checkbox 
                name="nighttemp" 
                checked={state.nighttemp} 
                onChange={this.toggleChecked}>
                Night Temperature
              </Checkbox>
            </fieldset>
            <fieldset>
              <legend>Weather Conditions:</legend>
              <Checkbox 
                name="description" 
                checked={state.description}
                onChange={this.toggleChecked}>
                Forecast
              </Checkbox>
              <Checkbox 
                name="pressure" 
                checked={state.pressure}
                onChange={this.toggleChecked}>
                Pressure
              </Checkbox>
              <Checkbox 
                name="humidity" 
                checked={state.humidity}
                onChange={this.toggleChecked}>
                Humidity
              </Checkbox> 
              <Checkbox 
                name="windspeed" 
                checked={state.windspeed}
                onChange={this.toggleChecked}>
                Wind Speed
              </Checkbox>
              <Checkbox 
                name="winddirection" 
                checked={state.winddirection}
                onChange={this.toggleChecked}>
                Wind Direction
              </Checkbox>
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
