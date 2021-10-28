import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Page as Component } from '.';

export default {
  title: 'Components',
  component: Component
} as Meta;

const Template: Story = () => (
  <Component>
    <div>Here is some content</div>
  </Component>
)

export const Page = Template.bind({});
