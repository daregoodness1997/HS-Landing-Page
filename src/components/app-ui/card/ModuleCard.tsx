import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const ModuleCard = () => {
  return (
    <Box
      sx={[
        {
          px: 6,
          py: 4,
          borderRadius: '6px',
          background: '#fcfcfc',
          transition: 'all 0.5s ease-in-out',
        },
        {
          '&:hover': {
            border: '1px solid #3f5eea',
          },
        },
      ]}
    >
      Treatments
    </Box>
  );
};

export default ModuleCard;
