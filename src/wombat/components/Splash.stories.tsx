import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Splash as Component, SplashProps as Props } from './Splash';

export default {
  title: 'Components',
  component: Component
} as Meta;

const Template: Story<Props> = (props: Props) => (
  <Component {...props} />
)

export const Splash = Template.bind({});
Splash.args = { loading: true };