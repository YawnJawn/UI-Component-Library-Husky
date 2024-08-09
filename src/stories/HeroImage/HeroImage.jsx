// HeroImage.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './HeroImage.css'; // Optional CSS for styling

const HeroImage = ({ label, background, primary, disabled, textColor }) => {
  const inlineStyle = {
    backgroundColor: disabled
      ? 'gray'
      : background || (primary ? 'blue' : 'white'),
    cursor: disabled ? 'not-allowed' : 'default',
    color: textColor || 'black', // Default text color set to black
    padding: '50px',
    textAlign: 'center',
    borderRadius: '10px',
    transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for color change
  };

  return (
    <div className="hero-image-container" style={inlineStyle}>
      <h1>{label}</h1>
    </div>
  );
};

HeroImage.propTypes = {
  label: PropTypes.string.isRequired,
  background: PropTypes.string,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  textColor: PropTypes.string, // New prop for text color
};

HeroImage.defaultProps = {
  background: '',
  primary: false,
  disabled: false,
  textColor: 'black', // Default text color is black
};

export default HeroImage;
