import React from 'react';
import { Box, Typography } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          color: '#ffffff',
          fontWeight: 700,
          fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
          textAlign: 'center',
        }}
      >
        Ahoy Designer
      </Typography>
    </Box>
  );
};

export default HomePage; 