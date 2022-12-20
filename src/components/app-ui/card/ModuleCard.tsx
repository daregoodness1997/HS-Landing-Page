import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

interface Props {
  label: string;
  paragraph?: string;
  onClick?: (e?: any) => void;
}

const ModuleCard: React.FC<Props> = ({ label, onClick, paragraph }) => {
  return (
    <Box
      onClick={onClick}
      sx={[
        {
          px: { lg: 2, xs: 2 },
          py: { lg: 2, xs: 2 },
          width: '100%',
          borderRadius: '6px',
          background: '#cce3ff',
          transition: 'all 0.5s ease-in-out',
          cursor: 'pointer',
          height: '100%',
        },
        {
          '&:hover': {
            background: '#3f5eea',
            color: '#fff',
          },
        },
      ]}
    >
      <Box
        sx={{
          width: '48px',
          height: '48px',
          mb: 2,
          background: '#FBCEB1',
          borderRadius: '100%',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <i className='bi bi-people'></i>
      </Box>
      <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>
        {label}
      </Typography>
      <Typography>{paragraph}</Typography>
    </Box>
  );
};

export default ModuleCard;
