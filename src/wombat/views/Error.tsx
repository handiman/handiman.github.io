import React from 'react';
import { Box } from '@material-ui/core';

export const Error = () => (
  <Box id="error">
    <div>
      <h1><i className="far fa-dizzy"></i></h1>
      A JavaScript error occurred.<br />
      Maybe this Henrik Becker guy isn't that great after all <i className="far fa-frown"></i>
    </div>
  </Box>
);