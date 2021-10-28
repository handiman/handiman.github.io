import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Summary as Component, SummaryProps as Props } from '.';

export default {
  title: 'Views/Resume/Components',
  component: Component
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <Component {...args} />
)

export const Summary = Template.bind({});
Summary.args = {
  title: "About Me",
  summary: [
    "Kick ass developer",
    "Good looking too"
  ]
}
