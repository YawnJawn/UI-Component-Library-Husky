import React from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css'; // Optional CSS for additional styling

const RadioButton = ({ options, backgroundColor, disabled, selectedValue }) => {
  const radioStyle = {
    backgroundColor: disabled ? 'gray' : backgroundColor || 'white',
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid black',
    display: 'inline-flex',
    alignItems: 'center',
  };

  const textStyle = {
    marginLeft: '8px',
    color: disabled ? 'darkgray' : 'black',
  };

  return (
    <div>
      {options &&
        options.length > 0 &&
        options.map((option) => (
          <label key={option.value} style={radioStyle}>
            <input
              type="radio"
              name="radio-buttons"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              disabled={disabled}
              style={{ margin: '0' }}
            />
            <span style={textStyle}>{option.label}</span>
          </label>
        ))}
    </div>
  );
};

RadioButton.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  backgroundColor: PropTypes.string,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

RadioButton.defaultProps = {
  backgroundColor: 'white',
  primary: false,
  disabled: false,
  selectedValue: '',
};

export default RadioButton;
