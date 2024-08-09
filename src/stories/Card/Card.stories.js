// Card.stories.js
import React from 'react';
import Card from './Card';

const cardStories = {
  title: 'Components/Card',
  component: Card,
};

export default cardStories;

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary Card',
  content: 'This is a clickable card.',
  background: 'white',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Card',
  content: 'This card is disabled and cannot be clicked.',
  background: '', // Defaults to gray due to the component's logic
  disabled: true,
};
