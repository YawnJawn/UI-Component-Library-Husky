// Dropdown.stories.js
import React from 'react';
import Dropdown from './Dropdown';
import './Dropdown.css';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ],
  placeholder: 'Choose',
  textColor: 'white', // Custom text color for primary state
  background: 'blue',
  primary: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ],
  placeholder: 'Choose',
  textColor: 'darkgray', // Custom text color for disabled state
  background: 'gray',
  primary: false,
  disabled: true,
};
