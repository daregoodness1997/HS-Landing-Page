import { Box, Typography, Grid } from '@mui/material';
import React, { useState } from 'react';
import Button from '../../components/app-ui/Button';
import ModuleCard from '../../components/app-ui/card/ModuleCard';
import Input from '../../components/app-ui/inputs/basic/Input';
import CustomSelect from '../../components/app-ui/inputs/basic/Select';
import Select from '../../components/app-ui/inputs/basic/Select/Select';
import Textarea from '../../components/app-ui/inputs/basic/Textarea';
import ModalBox from '../../components/app-ui/modal';
import { BottomWrapper } from '../../components/app-ui/styles';

const Overview = () => {
  const data = localStorage.getItem('user') || '';
  const user = JSON.parse(data);
  const [open, setOpen] = useState(false);

  const handleTreatment = () => {
    setOpen(true);
  };

  const submit = () => {
    setOpen(false);
  };

  return (
    <>
      <ModalBox open={open} onClose={submit} header='Treatment' width='40%'>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Input label='Name' />
          <Select label='Diagnostics' options={[]} />
          <Select label='Peninclin' options={[]} />
          <Textarea label='Medication' />
          <BottomWrapper>
            <button>Clear</button>
            <button>Save</button>
          </BottomWrapper>
        </Box>
      </ModalBox>
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
          <Grid item xs={2} sm={4} md={4}>
            <ModuleCard label='Treatment' onClick={() => handleTreatment()} />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <ModuleCard
              label='Broad Complex Taclycardia'
              onClick={() => handleTreatment()}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Overview;
