// Dropdown.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css'; // Optional CSS for styling

const Dropdown = ({
  options,
  textColor,
  background,
  primary,
  disabled,
  placeholder,
}) => {
  const inlineStyle = {
    backgroundColor: disabled
      ? 'gray'
      : background || (primary ? 'blue' : 'white'),
    color: textColor || 'black', // Default text color set to black
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    border: '1px solid #ccc', // Adding a border for better visibility
    width: '100%',
    boxSizing: 'border-box',
  };

  return (
    <select
      style={inlineStyle}
      className="dropdown"
      disabled={disabled}
      defaultValue=""
      aria-label="custom-dropdown"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  textColor: PropTypes.string,
  background: PropTypes.string,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

Dropdown.defaultProps = {
  textColor: 'black',
  background: '',
  primary: false,
  disabled: false,
  placeholder: 'Choose',
};

export default Dropdown;
