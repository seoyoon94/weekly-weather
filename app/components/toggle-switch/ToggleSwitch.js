import React, { PropTypes } from 'react';
import styles from './toggle-switch.scss';

const ToggleSwitch = (props) => {
  return (
    <div className={styles.switch}>
      <label htmlFor={props.name}>{props.children}: </label>
      <input 
        type="checkbox" 
        id={props.name} 
        name={props.name} 
        checked={props.checked} 
        onChange={props.onChange}/>
      <div className={styles.slider}></div>
    </div>
  );
};

ToggleSwitch.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default ToggleSwitch;
