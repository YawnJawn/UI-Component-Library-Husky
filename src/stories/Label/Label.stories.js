// Label.stories.js
import React from 'react';
import Label from './Label';

const labelStories = {
  title: 'Components/Label',
  component: Label,
};

export default labelStories;

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Label',
  color: 'black',
  size: '16px',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Label',
  color: 'black',
  size: '16px',
  disabled: true,
};
