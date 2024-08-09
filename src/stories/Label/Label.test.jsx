//Label component tests
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './Label';

describe('Label component Visibility Tests', () => {
  test('renders Default Label and is visible', () => {
    render(<Label text="Default Label" />);
    const labelElement = screen.getByText(/Default Label/i);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toBeVisible();
  });

  test('renders Disabled Label and is visible', () => {
    render(<Label text="Disabled Label" />);
    const labelElement = screen.getByText(/Disabled Label/i);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toBeVisible();
  });

  test('Disabled Label has correct background color when disabled', () => {
    render(<Label text="Disabled Label" disabled />);
    const labelElement = screen.getByText(/Disabled Label/i);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toBeVisible();

    // Check the background color
    const styles = getComputedStyle(labelElement);
    expect(styles.backgroundColor).toBe('gray'); // Expected disabled color
  });
});
