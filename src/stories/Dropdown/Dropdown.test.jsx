// Dropdown.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

describe('Dropdown Component Tests', () => {
  test('Dropdown is visible', () => {
    render(
      <Dropdown
        options={[{ value: '1', label: 'Option 1' }]}
        placeholder="Choose"
      />
    );
    const dropdownElement = screen.getByLabelText(/custom-dropdown/i);
    expect(dropdownElement).toBeInTheDocument();
    expect(dropdownElement).toBeVisible();
  });

  test('Dropdown background color is gray when disabled', () => {
    render(
      <Dropdown
        options={[{ value: '1', label: 'Option 1' }]}
        placeholder="Choose"
        disabled
      />
    );
    const dropdownElement = screen.getByLabelText(/custom-dropdown/i);
    expect(dropdownElement).toBeInTheDocument();
    expect(dropdownElement).toBeVisible();

    // Check the background color of the dropdown
    const styles = getComputedStyle(dropdownElement);
    expect(styles.backgroundColor).toBe('gray');
  });
});
