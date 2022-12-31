import { Box, Typography, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ModuleCard from '../../components/app-ui/card/ModuleCard';
import Input from '../../components/app-ui/inputs/basic/Input';

import Modal from '../../components/Modal';
import BoxModal from '../../components/app-ui/modal/BoxModal';
import TreatmentView from '../views/TreatmentView';
import NCTView from '../views/NCTView';
import MNTView from '../views/MNTView';
import WardView from '../views/WardView';
import BCTView from '../views/BCTView';
import Shock from '../views/Shock';
import BreathlessView from '../views/BreathlessView';
import ObservationView from '../views/ObservationView';
import Antenatal from '../views/Antenatal';

// interface MedicationsProps {
//   peninclin?: boolean;
//   data: any[];
// }

const Nursing = () => {
  const data = localStorage.getItem('user') || '';
  const user = JSON.parse(data);
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [openNCT, setOpenNCT] = useState(false);
  const [openMNT, setOpenMNT] = useState(false);
  const [openNCTC, setOpenNCTC] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleNCTClose = () => {
    setOpenNCT(false);
  };
  const handleMNTClose = () => {
    setOpenNCT(false);
  };

  const renderContext = () => {
    if (content === 'Treatment') return <TreatmentView setOpen={setOpen} />;
    if (content === 'NCT') return <NCTView />;
    if (content === 'MNT') return <MNTView />;
    if (content === 'Ward') return <WardView />;
    if (content === 'Management of BCT') return <BCTView />;
    if (content === 'Breathlessness') return <BreathlessView />;
    if (content === 'Shock') return <Shock />;
    if (content === 'Observation  & Vital Monitoring Signs')
      return <ObservationView />;
    if (content === 'Antenatal Care & Subsequent') return <Shock />;
    if (content === 'Pregnancy - Antenatal Care') return <Antenatal />;
    return;
  };

  return (
    <>
      <BoxModal open={open} onClose={handleClose} header={content}>
        {renderContext()}
      </BoxModal>

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
        <Box sx={{ px: { lg: '16%', xs: '8%' }, width: '100%', pt: 6 }}>
          <Input
            placeholder='Search here'
            sx={{ backgroundColor: '#EDF5FF', border: '1px solid #bbdaff' }}
          />
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ width: '100%', px: { lg: '10%', xs: 0 }, pt: 6 }}
        >
          <Grid item xs={6} sm={4} md={4}>
            <ModuleCard
              label='Ward Routine Nurse
'
              onClick={() => {
                handleOpen();
                setContent('Ward');
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ModuleCard
              label='Breathlessness'
              onClick={() => {
                handleOpen();
                setContent('Breathlessness');
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ModuleCard
              label='Observation  & Vital Monitoring Signs'
              onClick={() => {
                handleOpen();
                setContent('Observation  & Vital Monitoring Signs');
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ModuleCard
              label='Pregnancy - Antenatal Care'
              onClick={() => {
                handleOpen();
                setContent('Pregnancy - Antenatal Care');
              }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <ModuleCard
              label='Antenatal Care & Subsequent'
              onClick={() => {
                handleOpen();
                setContent('Antenatal Care & Subsequent');
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Nursing;
