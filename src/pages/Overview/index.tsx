import { Box, Typography } from '@mui/material';
import React from 'react';

const Overview = () => {
  const data = localStorage.getItem('user') || '';
  const user = JSON.parse(data);
  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Typography
          variant='body2'
          sx={{
            fontSize: '18px',
          }}
        >
          Welcome
        </Typography>
        <Typography
          sx={{
            color: 'black',
            fontSize: '20px',
            fontWeight: 'bold',
            marginLeft: 1,
          }}
        >
          {user.firstname} {user.lastname} 👋
        </Typography>
      </Box>
    </Box>
  );
};

export default Overview;
