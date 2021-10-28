import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Error as View } from './Error';

export default {
  title: 'Views',
  component: View
} as Meta;

const Template: Story = () => (
  <View />
)

export const Error = Template.bind({});
