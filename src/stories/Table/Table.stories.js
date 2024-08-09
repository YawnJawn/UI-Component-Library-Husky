import React from 'react';
import Table from './Table';

export default {
  title: 'Components/Table',
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headerText: 'Primary Table Header',
  rows: [
    ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
    ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'],
  ],
  footerText: 'Primary Table Footer',
  backgroundColor: 'lightblue',
  primary: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  headerText: 'Disabled Table Header',
  rows: [
    ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
    ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'],
  ],
  footerText: 'Disabled Table Footer',
  backgroundColor: 'lightblue',
  primary: false,
  disabled: true,
};
