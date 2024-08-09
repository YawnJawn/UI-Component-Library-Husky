// Label.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Label.css';

const Label = ({ text, color, size, disabled, primary }) => {
  const styles = {
    color: disabled ? 'gray' : color,
    fontSize: size,
    backgroundColor: disabled ? 'gray' : primary ? 'blue' : 'white',
    cursor: disabled ? 'not-allowed' : 'default',
    opacity: disabled ? 0.5 : 1,
  };

  return <span style={styles}>{text}</span>;
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
};

Label.defaultProps = {
  color: 'black',
  size: '16px',
  primary: false,
  disabled: false,
};

export default Label;
