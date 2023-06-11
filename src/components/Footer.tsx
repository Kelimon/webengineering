import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

interface Props {
  // Add your props here
}

const Footer: React.FC<Props> = () => {
  return (
    <>
      <Box
        sx={{
          p: 2,
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "#f0f0f0",
        }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          Copyright &copy; DHBW Stuttgart
        </Typography>
      </Box>
    </>
  );
};

export default Footer;