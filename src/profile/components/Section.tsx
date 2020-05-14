import React from 'react';
import { Box, Container } from '@material-ui/core';

export default (props:any) => {
  const { children, component } = props;

  return (
    <Box component={component || "section"} py={5} {...props} >
      <Container>
        {children}
      </Container>
    </Box>
  )
}