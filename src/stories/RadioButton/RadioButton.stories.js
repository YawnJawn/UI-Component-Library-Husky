import React, { useState } from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
};

const Template = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.selectedValue);
  return (
    <RadioButton
      {...args}
      selectedValue={selectedValue}
      onChange={setSelectedValue}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  name: 'primary-radio-buttons',
  selectedValue: 'option1',
  backgroundColor: 'lightblue',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  name: 'disabled-radio-buttons',
  selectedValue: 'option1',
  backgroundColor: 'gray',
  disabled: true,
};
