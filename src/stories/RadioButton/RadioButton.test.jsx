// RadioButton.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  test('should be visible', () => {
    render(
      <RadioButton
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        selectedValue="option1"
        backgroundColor="lightblue"
        disabled={false}
        onChange={() => {}}
      />
    );

    // Check if all radio buttons are rendered and visible
    expect(screen.getByLabelText('Option 1')).toBeVisible();
    expect(screen.getByLabelText('Option 2')).toBeVisible();
    expect(screen.getByLabelText('Option 3')).toBeVisible();
  });

  test('should have gray background when disabled', () => {
    render(
      <RadioButton
        options={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
        selectedValue="option1"
        backgroundColor="lightblue"
        disabled={true}
        onChange={() => {}}
      />
    );

    // Check the background color of the first radio button container
    const radioButton = screen.getByLabelText('Option 1').parentElement;
    expect(radioButton).toHaveStyle({ backgroundColor: 'gray' });
  });
});
