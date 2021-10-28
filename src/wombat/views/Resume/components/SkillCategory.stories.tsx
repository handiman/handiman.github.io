import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SkillCategory as Component, SkillCategoryProps as Props } from '.';

export default {
  title: 'Views/Resume/Components',
  component: Component
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <Component {...args} />
)

export const SkillCategory = Template.bind({});
SkillCategory.args = {
  category: 'Knowledge',
  skills: [
    {
      name: 'Nothing',
      level: 'Novice'
    }, {
      name: 'Everything',
      level: 'Expert'
    }
  ]
};
