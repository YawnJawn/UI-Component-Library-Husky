// Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Optional CSS for styling

const Button = ({ label, onClick, primary, disabled, textColor }) => {
  const className = primary ? 'button button--primary' : 'button';

  const inlineStyle = {
    backgroundColor: disabled ? 'gray' : primary ? 'blue' : 'white',
    color: disabled ? 'darkgray' : textColor || 'black',
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
  };

  return (
    <button
      className={className}
      style={inlineStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  textColor: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  primary: false,
  disabled: false,
};

export default Button;
