// Card.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component Tests', () => {
  test('Card is visible', () => {
    render(<Card title="Visible Card" content="Content of the card." />);
    const cardElement = screen.getByText(/Visible Card/i);
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toBeVisible();
  });

  test('Card has gray background when disabled', () => {
    render(
      <Card title="Disabled Card" content="This card is disabled." disabled />
    );
    const cardElement = screen.getByText(/Disabled Card/i);
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toBeVisible();

    // Check the background color
    const styles = getComputedStyle(cardElement.parentElement);
    expect(styles.backgroundColor).toBe('gray');
  });
});
