import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';

describe('Table Component Tests', () => {
  test('Table is visible', () => {
    render(
      <Table
        headerText="Test Header"
        rows={[['Cell 1', 'Cell 2', 'Cell 3']]}
        footerText="Test Footer"
      />
    );
    const headerElement = screen.getByText(/Test Header/i);
    const footerElement = screen.getByText(/Test Footer/i);
    expect(headerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });

  test('Table background color is gray when disabled', () => {
    render(
      <Table
        headerText="Disabled Header"
        rows={[['Cell 1', 'Cell 2', 'Cell 3']]}
        footerText="Disabled Footer"
        disabled
      />
    );
    const tableElement = screen.getByText(/Disabled Header/i).closest('table');
    expect(tableElement).toHaveStyle('background-color: gray');
  });
});
