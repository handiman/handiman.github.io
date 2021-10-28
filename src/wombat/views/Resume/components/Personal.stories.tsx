import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Personal as Component } from '.';

export default {
  title: 'Views/Resume/Components',
  component: Component
} as Meta;

const Template: Story = (args:any) => (
  <Component {...args} />
)

export const Personal = Template.bind({});
Personal.args = {
}
