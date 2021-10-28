import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Introduction as Component } from '.';

export default {
  title: 'Views/Resume/Components',
  component: Component
} as Meta;

const Template: Story = () => (
  <Component />
)

export const Introduction = Template.bind({});
Introduction.args = {
  layout: 'grid'
}
