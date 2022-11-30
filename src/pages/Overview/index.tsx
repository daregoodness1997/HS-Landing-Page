import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import ModuleCard from '../../components/app-ui/card/ModuleCard';
import Input from '../../components/app-ui/inputs/basic/Input';

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
      <Box sx={{ px: '16%', width: '100%', pt: 6 }}>
        <Input placeholder='Search here' />
      </Box>
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ width: '100%', px: '10%', pt: 6 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ModuleCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Overview;
