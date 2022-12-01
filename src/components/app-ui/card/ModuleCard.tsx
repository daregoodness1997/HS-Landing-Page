import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

interface Props {
  label: string;
  onClick: (e?: any) => void;
}

const ModuleCard: React.FC<Props> = ({ label, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={[
        {
          px: 6,
          py: 4,
          borderRadius: '6px',
          background: '#fcfcfc',
          transition: 'all 0.5s ease-in-out',
          cursor: 'pointer',
          border: '1px solid #eee',
        },
        {
          '&:hover': {
            border: '1px solid #3f5eea',
          },
        },
      ]}
    >
      <Typography>{label}</Typography>
    </Box>
  );
};

export default ModuleCard;
