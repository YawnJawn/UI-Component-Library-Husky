// Text.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';

describe('Text Component Tests', () => {
  test('Text is visible and displays content', () => {
    render(<Text content="Test Content" />);

    // Check that the text is visible and displays the content
    const textElement = screen.getByText(/Test Content/i);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
  });

  test('Text color is gray when disabled', () => {
    render(<Text content="Test Content" disabled />);

    // Check that the text is visible
    const textElement = screen.getByText(/Test Content/i);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();

    // Check the color of the text
    const styles = getComputedStyle(textElement);
    expect(styles.color).toBe('gray');
  });
});
