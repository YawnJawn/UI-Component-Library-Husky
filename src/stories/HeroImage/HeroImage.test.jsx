// HeroImage.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from './HeroImage';

describe('HeroImage Component Tests', () => {
  test('HeroImage is visible', () => {
    render(<HeroImage label="Primary Hero Image" background="blue" />);
    const heroElement = screen.getByText(/Primary Hero Image/i);
    expect(heroElement).toBeInTheDocument();
    expect(heroElement).toBeVisible();
  });

  test('HeroImage has gray background when disabled', () => {
    render(<HeroImage label="Disabled Hero Image" disabled />);
    const heroElement = screen.getByText(/Disabled Hero Image/i);
    expect(heroElement).toBeInTheDocument();
    expect(heroElement).toBeVisible();

    // Check the background color of the parent element
    const styles = getComputedStyle(heroElement.parentElement);
    expect(styles.backgroundColor).toBe('gray');
  });
});
