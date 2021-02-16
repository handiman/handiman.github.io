import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Menu as Component } from '.';
import { Colors } from '../theme';

export default {
  title: 'Components',
  component: Component
} as Meta;

const Template: Story = () => (
  <div style={{ width: '100%', height: '100vh' }}>
    <div style={{ width: '100%', height: '50vh', backgroundColor: Colors.Black }}>&nbsp;</div>
    <div style={{ width: '100%', height: '50vh', backgroundColor: Colors.White }}>&nbsp;</div>
    <div style={{ width: '100%', height: '50vh', backgroundColor: Colors.White }}>&nbsp;</div>
    <div style={{ width: '100%', height: '50vh', backgroundColor: Colors.Black }}>&nbsp;</div>
    <Component />
  </div>
);

export const Menu = Template.bind({});
