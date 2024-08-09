// Image.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Image.css'; // Optional CSS for additional styling

const Image = ({ src, alt, text, borderColor, primary, disabled }) => {
  const inlineStyle = {
    borderColor: disabled
      ? 'gray'
      : borderColor || (primary ? 'blue' : 'black'),
    borderStyle: 'solid',
    borderWidth: '2px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'block',
    margin: '0 auto',
    padding: '10px',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={src}
        alt={alt}
        style={{ ...inlineStyle, display: 'inline-block' }}
      />
      <div
        style={{
          color: disabled ? 'gray' : 'black',
          marginTop: '8px',
        }}
      >
        {text}
      </div>
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string,
  borderColor: PropTypes.string,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
};

Image.defaultProps = {
  text: '',
  borderColor: 'black',
  primary: false,
  disabled: false,
};

export default Image;
