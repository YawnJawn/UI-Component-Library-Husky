import React from 'react';
import PropTypes from 'prop-types';
import './Table.css'; // Optional CSS for additional styling

const Table = ({ headerText, rows, footerText, backgroundColor, disabled }) => {
  const tableStyle = {
    backgroundColor: disabled ? 'gray' : backgroundColor || 'white',
    cursor: disabled ? 'not-allowed' : 'default',
    borderCollapse: 'collapse',
    width: '100%',
    boxSizing: 'border-box',
  };

  const cellStyle = {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left',
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th colSpan="3" style={cellStyle}>
            {headerText}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} style={cellStyle}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" style={cellStyle}>
            {footerText}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

Table.propTypes = {
  headerText: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  footerText: PropTypes.string,
  backgroundColor: PropTypes.string,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
};

Table.defaultProps = {
  footerText: '',
  backgroundColor: '',
  primary: false,
  disabled: false,
};

export default Table;
