import { Box, Typography, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AppButton from '../../components/app-ui/app-button';
import Button from '../../components/app-ui/Button';
import ModuleCard from '../../components/app-ui/card/ModuleCard';
import Input from '../../components/app-ui/inputs/basic/Input';
import CustomSelect from '../../components/app-ui/inputs/basic/Select';
import Select from '../../components/app-ui/inputs/basic/Select/Select';
import Textarea from '../../components/app-ui/inputs/basic/Textarea';
import ModalBox from '../../components/app-ui/modal';
import { BottomWrapper } from '../../components/app-ui/styles';
import { toast, ToastContainer } from 'react-toastify';
import { Controller, useForm } from 'react-hook-form';

interface MedicationsProps {
  peninclin?: boolean;
  data: any[];
}

const Overview = () => {
  const data = localStorage.getItem('user') || '';
  const user = JSON.parse(data);
  const [open, setOpen] = useState(false);
  const [medications, setMedications] = useState<MedicationsProps[]>([
    { data: [''] },
  ]);
  const { handleSubmit, control, register, watch } = useForm();

  const handleTreatment = () => {
    setOpen(true);
  };

  const submit = () => {
    setOpen(false);
  };

  const medicationData = [
    {
      id: '1',
      name: 'Rheumatic Fever',
      medications: [
        { peninclin: true, data: ['Phenoxymethylpenicillin'] },
        { peninclin: false, data: ['Sulfadiazine'] },
      ],
    },
    {
      id: '2',
      name: 'Streptococcal Infection',
      medications: [
        { peninclin: true, data: ['Phenoxymethylpenicillin'] },
        { peninclin: false, data: ['Erythromycin', 'Azithromycin'] },
      ],
    },
    {
      id: '3',
      name: 'Meningitis',
      medications: [
        { peninclin: true, data: ['Ciprofloxacin'] },
        { peninclin: false, data: ['Rifampicin', 'Ceftriazone'] },
      ],
    },
  ];

  const diagnosticOptions = medicationData.map(data => ({
    label: data.name,
    value: data.id,
  }));

  const peninclinOptions = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ];

  const diagnostics = watch('diagnostics');
  const hasPenicilin = watch('peninclin');

  useEffect(() => {
    const getMedication = () => {
      const medications = medicationData.filter(
        medication => medication.id === diagnostics
      );

      const medicPeninclin = medications[0]?.medications.filter(
        medication => medication.peninclin === Boolean(hasPenicilin)
      );

      return medicPeninclin;
    };
    let medic = getMedication();

    setMedications(medic);
  }, [setMedications, diagnostics, hasPenicilin, medicationData]);

  console.log('medic', medications);

  const renderMedications = () => {
    if (medications !== undefined)
      return (
        <div className='editable' contentEditable='true'>
          <ul>
            {medications.map(medication => (
              <div style={{ display: 'block', margin: '6px', padding: '4px' }}>
                {medication?.data}
              </div>
            ))}
          </ul>
        </div>
      );
    return;
  };

  return (
    <>
      <ModalBox open={open} onClose={submit} header='Treatment' width='40%'>
        <form>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Input label='Name' register={register('name')} />
            <Select
              label='Diagnostics'
              options={diagnosticOptions}
              register={register('diagnostics')}
            />
            <Select
              label='Peninclin'
              options={peninclinOptions}
              register={register('peninclin')}
            />

            {renderMedications()}
            {/* <Textarea label='Medication' /> */}
            <BottomWrapper>
              <button>Clear</button>
              <AppButton label='Save' />
            </BottomWrapper>
          </Box>
        </form>
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
