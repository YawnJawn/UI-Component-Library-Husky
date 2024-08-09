// Card.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, content, onClick, disabled, background }) => {
  // Inline styles for the card
  const inlineStyle = {
    backgroundColor: disabled ? 'gray' : background || 'white',
    color: 'black',
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
  };

  return (
    <div
      className="card"
      style={inlineStyle}
      onClick={disabled ? null : onClick}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  background: PropTypes.string,
};

Card.defaultProps = {
  onClick: () => {},
  disabled: false,
  background: '',
};

export default Card;
