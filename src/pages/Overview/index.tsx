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
import Modal from '../../components/Modal';
import BoxModal from '../../components/app-ui/modal/BoxModal';
import { posts } from '../MNT';

interface MedicationsProps {
  peninclin?: boolean;
  data: any[];
}

const Overview = () => {
  const data = localStorage.getItem('user') || '';
  const user = JSON.parse(data);
  const [open, setOpen] = useState(false);
  const [openNCT, setOpenNCT] = useState(false);
  const [openMNT, setOpenMNT] = useState(false);
  const [openNCTC, setOpenNCTC] = useState(false);
  const [pen, setPen] = useState(false);
  const [diag, setDiag] = useState('');
  const [medications, setMedications] = useState<MedicationsProps[]>([
    { data: [''] },
  ]);
  const { handleSubmit, control, register, watch, setValue } = useForm();

  const handleTreatment = () => {
    setOpen(true);
  };

  const handleNCTClose = () => {
    setOpenNCT(false);
  };
  const handleMNTClose = () => {
    setOpenNCT(false);
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

  console.log('Pen', pen);

  useEffect(() => {
    const getMedication = () => {
      const medications = medicationData.filter(
        medication => medication.id === diag
      );

      const medicPeninclin = medications[0]?.medications.filter(
        medication => medication.peninclin === Boolean(pen)
      );

      return medicPeninclin;
    };
    let medic = getMedication();

    setMedications(medic);
  }, [pen, diag]);

  const hanlePeninclin = pen => {
    const medications = medicationData.filter(
      medication => medication.id === diagnostics
    );

    const medicPeninclin = medications[0]?.medications.filter(
      medication => medication.peninclin === Boolean(pen)
    );

    setMedications(medicPeninclin);
  };

  const renderMedications = () => {
    if (medications !== undefined)
      return (
        <div
          // className='editable'
          // contentEditable='true'
          style={{
            height: 'auto',
            padding: '.9rem',
            width: '100%',
            background: '#f7f7f7',
            border: '1px solid #eee',
          }}
        >
          <ul>
            {medications.map((medication, idx) => (
              <li
                style={{ display: 'block', margin: '6px', padding: '4px' }}
                key={idx}
              >
                {medication?.data}
              </li>
            ))}
          </ul>
        </div>
      );
    return;
  };

  return (
    <>
      <BoxModal open={open} onClose={submit} header='Treatment'>
        <form onSubmit={handleSubmit(submit)}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Input label='Name' register={register('name')} />
            <Select
              label='Diagnostics'
              options={diagnosticOptions}
              value={diag}
              // register={register('diagnostics')}
              handleChange={e => {
                setValue('diagnostics', e.target.value);
                setDiag(e.target.value);
              }}
            />
            <Select
              label='Peninclin'
              options={peninclinOptions}
              // register={register('peninclin')}
              value={pen}
              handleChange={e => {
                setValue('peninclin', e.target.value);
                setPen(e.target.value);
              }}
            />

            {renderMedications()}
            {/* <Textarea label='Medication' /> */}
            <BottomWrapper>
              <button>Clear</button>
              <AppButton label='Save' />
            </BottomWrapper>
          </Box>
        </form>
      </BoxModal>
      <BoxModal open={openNCT} onClose={handleNCTClose} header='NCT'>
        <Modal
          open={openNCTC}
          setOpen={setOpenNCTC}
          title='BP Chest Paain'
          paragraph='Hearth Failure, HR>/200/min'
          children=''
        />
        <div>
          <div className='h-full '>
            <div>
              <h2 className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-center my-2'>
                Narrow Complex Tachycardia (NCT)
              </h2>
              <div className='bg-white   sm:p-4  boxShadow-lg rounded-md flex  flex-col items-center justify-center inside'>
                <div className='grid gap-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12  px-8 '>
                  <div>
                    <h2 className='text-xl leading-6 font-bold text-gray-900'>
                      Irregular Rhythm
                    </h2>
                  </div>
                  <div>
                    <ul>
                      <li>BP</li>
                      <li>Chest Pain</li>
                      <li>Hearth Failure </li>
                      <li>{`HR>/200/min`}</li>
                    </ul>
                  </div>
                </div>
                <button
                  type='button'
                  onClick={() => setOpenNCTC(true)}
                  className='inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm mb-12'
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </BoxModal>

      {/* <BoxModal open={openMNT} onClose={handleMNTClose} header='MNT'>
        <Modal
          open={openNCTC}
          setOpen={setOpenNCTC}
          title='BP Chest Paain'
          paragraph='Hearth Failure, HR>/200/min'
          children=''
        />
        <div>
          <div className='h-full '>
            <div>
              <h2 className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-center my-2'>
                Management of Narrow Complex Tachycardia (NCT)
              </h2>
              <div className='bg-white  mt-6 sm:p-4  boxShadow-lg rounded-md flex  flex-col items-center justify-center inside'>
                <div className='grid gap-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12 '>
                  {posts.map(post => (
                    <div
                      key={post.title}
                      className='flex flex-col items-center justify-center'
                    >
                      <img className='' src={post.image} alt={post.title} />
                      <a href={post.href} className='block mt-4'>
                        <p className='text-xl font-semibold text-gray-900'>
                          {post.title}
                        </p>
                      </a>
                    </div>
                  ))}
                </div>
                <button
                  type='button'
                  onClick={() => setOpenNCTC(true)}
                  className='inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm mb-12'
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </BoxModal> */}

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
          spacing={{ xs: 4, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ width: '100%', px: { lg: '10%', xs: 0 }, pt: 6 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <ModuleCard label='Treatment' onClick={() => handleTreatment()} />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <ModuleCard label='NCT' onClick={() => setOpenNCT(true)} />
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <ModuleCard
              label='MNT
'
              onClick={() => setOpenMNT(true)}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Overview;
