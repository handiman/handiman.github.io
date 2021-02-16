import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Resume } from '.';

export default {
  title: 'Views/Resume',
  component: Resume
} as Meta;

const Template: Story = () => (
  <Resume />
)

export const View = Template.bind({});
