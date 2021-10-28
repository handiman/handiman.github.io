import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BigPagingButton as Component, BigPagingButtonProps as Props } from '.';

export default {
  title: 'Components',
  component: Component
} as Meta;

const Template: Story<Props> = (props: Props) => (
  <Component {...props} />
)

export const BigPagingButton = Template.bind({});
BigPagingButton.args = {
  disabled: false
}