import React, { PropTypes } from 'react';
import styles from './button.scss';

import { removeCity } from '../../actions';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button 
        type='button' 
        onClick={() => this.props.handleClick(this.props.id)}
        className={styles.remove}>
        {this.props.children}
      </button>
    );
  }
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Button;
