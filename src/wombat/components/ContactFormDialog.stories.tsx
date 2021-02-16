import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ContactFormDialog as Component } from '.';
import { Box } from '@material-ui/core';

export default {
  title: 'Components',
  component: Component
} as Meta;

const Template: Story = (props: any) => (
  <Box textAlign="center">
    <Component {...props} />
  </Box>
)

export const ContactFormDialog = Template.bind({});
ContactFormDialog.args = {
  title: 'Contact Me',
  open: true
};
