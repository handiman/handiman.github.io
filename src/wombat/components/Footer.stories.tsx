import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Footer as Component } from '.';

export default {
  title: 'Components',
  component: Component
} as Meta;

const Template: Story = () => (
  <Component>
    <div title="This element is rendered because it has a title">This element is rendered because it has a title</div>
    <div title="This element also has a title">This element also has a title</div>
    <div>This element is not rendered because it does not have a title</div>
  </Component>
)

export const Footer = Template.bind({});
