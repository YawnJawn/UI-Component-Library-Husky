// Image.stories.js
import React from 'react';
import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Primary Image',
  text: 'Primary Image',
  borderColor: 'blue',
  primary: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Disabled Image',
  text: 'Disabled Image',
  borderColor: 'gray',
  primary: false,
  disabled: true,
};
