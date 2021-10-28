import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ExperienceSection as Component } from '.';

export default {
  title: 'Views/Resume/Components',
  component: Component
} as Meta;

const Template: Story = (args:any) => (
  <Component experience={[
    {
      name: 'Colloseum Entertainment Ltd',
      from: 'Nov 100',
      to: 'Dec 100',
      role: 'Gladiator',
      location: 'Rome',
      summary: "- So many lions\n- So short of breath",
      skills: [
        "Running",
        "Evading",
        "Dodging"
      ]
    }
  ]} {...args} />
)

export const ExperienceSection = Template.bind({});
ExperienceSection.args = {
  layout: 'grid'
}
