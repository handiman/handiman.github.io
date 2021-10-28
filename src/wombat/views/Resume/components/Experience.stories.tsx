import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Experience as Component } from '.';

export default {
  title: 'Views/Resume/Components',
  component: Component
} as Meta;

const Template: Story = (args: any) => (
  <Component experience={args} />
)

export const Experience = Template.bind({});
Experience.args = {
  name: 'Colloseum Entertainment Ltd',
  from: 'Nov 100',
  to: 'Dec 100',
  role: 'Gladiator',
  location: 'Rome',
  summary: "So many lions, so short of breath",
  skills: [ "Running", "Evading", "Dodging" ]
};