import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';

export default () => {
  return (
    <Box component="footer" className="MuiAppBar-colorSecondary" py={2} displayPrint="none">
      <Container>
        <Typography align="center">
          Copyright &copy; Henrik Becker Consulting AB
        </Typography>
      </Container>
    </Box>
  );
}