import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SkillsSection as Component } from '.';
import { ISkillSet } from '../../../Profile';

export default {
  title: 'Views/Resume/Components',
  component: Component
} as Meta;

const Template: Story<ISkillSet> = (args: ISkillSet) => (
  <Component skills={args} />
)

export const SkillsSection = Template.bind({});
SkillsSection.args = {
  "Cooking": [{
    name: "Pasta",
    level: "Expert"
  }]
}
