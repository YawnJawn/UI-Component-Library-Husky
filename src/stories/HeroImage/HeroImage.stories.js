// HeroImage.stories.js
import React from 'react';
import HeroImage from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
};

const Template = (args) => <HeroImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Hero Image',
  background: '', // Will use the default primary color if not specified
  primary: true,
  disabled: false,
  textColor: 'black',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Hero Image',
  background: '',
  primary: false,
  disabled: true,
  textColor: 'darkgray', // Set text color to dark gray for disabled state
};
