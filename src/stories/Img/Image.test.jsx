// Image.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Image from './Image';

describe('Image Component Tests', () => {
  test('Image is visible and displays text', () => {
    render(
      <Image
        src="https://via.placeholder.com/150"
        alt="Primary Image"
        text="Primary Image"
      />
    );

    // Check that the image and text are visible
    const imageElement = screen.getByAltText(/Primary Image/i);
    const textElement = screen.getByText(/Primary Image/i);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toBeVisible();
    expect(textElement).toBeInTheDocument();
  });

  test('Image border color is gray and cursor is not-allowed when disabled', () => {
    render(
      <Image
        src="https://via.placeholder.com/150"
        alt="Disabled Image"
        text="Disabled Image"
        borderColor="black"
        disabled
      />
    );

    // Check that the image and text are visible
    const imageElement = screen.getByAltText(/Disabled Image/i);
    const textElement = screen.getByText(/Disabled Image/i);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toBeVisible();
    expect(textElement).toBeInTheDocument();

    // Check the border color and cursor style
    const styles = getComputedStyle(imageElement);
    expect(styles.borderColor).toBe('gray');
    expect(styles.cursor).toBe('not-allowed');
  });
});
