import { Box, Input } from '@mui/material';
import React from 'react';
import AddInput from '../Inputs/AddInput';
import RemoveInput from '../Inputs/RemoveInput';

const Inputs = () => {
  return (
    <Box sx={{ m: 2, p: 2 }}>
      <AddInput />
      <RemoveInput />
    </Box>
  );
};

export default Inputs;
