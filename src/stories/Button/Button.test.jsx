// Button.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component Tests', () => {
  test('Primary button is visible', () => {
    render(<Button label="Primary Button" primary={true} />);

    // Check that the Primary Button is visible and displays the correct label text
    const buttonElement = screen.getByText(/Primary Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();
  });

  test('Disabled button background color is gray', () => {
    render(<Button label="Disabled Button" disabled={true} />);

    // Check that the Disabled Button is visible and displays the correct label text
    const buttonElement = screen.getByText(/Disabled Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();

    // Check the background color of the Button
    const styles = getComputedStyle(buttonElement);
    expect(styles.backgroundColor).toBe('gray');
  });
});
