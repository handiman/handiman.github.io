import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SectionIndicator as Component } from '.';

export default {
  title: 'Components',
  component: Component
} as Meta;

const Template: Story = () => (
  <Component>
    <div>Page 1</div>
    <div>Page 2</div>
    <div>Page 3</div>
  </Component>
);

export const SectionIndicator = Template.bind({});