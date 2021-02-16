import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LanguageSection as Component, LanguageSectionProps as Props } from '.';

export default {
  title: 'Views/Resume/Components',
  component: Component
} as Meta;

const Template: Story<Props> = (props: Props) => (
  <Component {...props} />
)

export const LanguageSection = Template.bind({});
LanguageSection.args = {
  title: "It speaks",
  languages: [
    {
      name: 'Swedish',
      proficiency: 'Native'
    },
    {
      name: 'English',
      proficiency: 'Fluent'
    }
  ]
}
