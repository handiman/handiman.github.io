import React from 'react';
import { Meta, Story } from '@storybook/react';
import { About as Component  } from '.';

export default {
  title: 'Components',
  component: Component
} as Meta;

const Template: Story = (props: any) => (
  <Component {...props} />
)

export const About = Template.bind({});
About.args = {
  open: true
}