// Text.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Text.css';

const Text = ({ content, color, size, disabled }) => {
  const styles = {
    color: disabled ? 'gray' : color,
    fontSize: size,
    cursor: disabled ? 'not-allowed' : 'default',
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <p style={styles} aria-disabled={disabled}>
      {content}
    </p>
  );
};

Text.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};

Text.defaultProps = {
  color: 'black',
  size: '16px',
  disabled: false,
};

export default Text;
