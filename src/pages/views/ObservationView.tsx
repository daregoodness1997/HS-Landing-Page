import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Modal from '../../components/Modal';
import { posts } from '../MNT';
import ModuleCard from '../../components/app-ui/card/ModuleCard';

const ObservationView = () => {
  const [open, setOpen] = useState(false);
  const [timeContent, setTimeContent] = useState('');
  const [step, setStep] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const renderContext = () => {
    if (timeContent === 'Routine') return <h3>4-6 Hourly</h3>;

    return;
  };
  return (
    <Box>
      <Modal
        open={open}
        setOpen={setOpen}
        title={`${timeContent} Routine`}
        paragraph=''
      >
        {renderContext()}
      </Modal>
      <div>
        <div className='h-full '>
          <div>
            <h2 className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-center my-2'>
              Observation and Vital Monitoring
            </h2>
            {step === 0 && (
              <div className='grid gap-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12'>
                <ModuleCard
                  label='Routine'
                  onClick={() => {
                    setTimeContent('Routine');
                    handleOpen();
                  }}
                />
                <ModuleCard
                  label='ICU'
                  onClick={() => {
                    setStep(step + 1);
                  }}
                />
                <ModuleCard
                  label='Post Up'
                  onClick={() => {
                    setStep(step + 1);
                  }}
                />
                <ModuleCard
                  label='Blood Transfusion'
                  onClick={() => {
                    setStep(step + 1);
                  }}
                />
              </div>
            )}
            {step === 1 && (
              <Box
                sx={[
                  {
                    px: { lg: 1, xs: 1 },
                    py: { lg: 4, xs: 1 },
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
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                RCG Risk Assesment
              </Box>
            )}
            {step === 2 && (
              <div className='bg-white  w-full'>
                <div className='flex gap-2'>
                  <Box
                    sx={[
                      {
                        px: { lg: 1, xs: 1 },
                        py: { lg: 1, xs: 1 },
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
                    onClick={() => {
                      setStep(step + 1);
                    }}
                  >
                    <ul>
                      <li>High Risk</li>
                      <li>Ongoing pain </li>
                      <li>ST </li>
                      <li>Troponin </li>
                    </ul>
                  </Box>
                  <Box
                    sx={[
                      {
                        px: { lg: 1, xs: 1 },
                        py: { lg: 1, xs: 1 },
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
                    <ul>
                      <li>Low Risk</li>
                      <li>No further pain </li>
                      <li>ST </li>
                      <li>Normal </li>
                      <li>NoTroponin </li>
                    </ul>
                  </Box>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className='bg-white  w-full'>
                <div className='flex gap-2'>
                  <Box
                    sx={[
                      {
                        px: { lg: 1, xs: 1 },
                        py: { lg: 1, xs: 1 },
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
                    onClick={() => {
                      setStep(step + 1);
                    }}
                  >
                    <h2>Antibiotics</h2>

                    <ul>
                      <li>GP II</li>
                      <li>Add </li>
                    </ul>
                  </Box>
                  <Box
                    sx={[
                      {
                        px: { lg: 1, xs: 1 },
                        py: { lg: 1, xs: 1 },
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
                    onClick={() => {
                      setStep(step + 1);
                    }}
                  >
                    <h2>Medical Therapy</h2>
                    <ul>
                      <li>IC Blocker</li>
                      <li>Intensive </li>
                    </ul>
                  </Box>
                </div>
              </div>
            )}
            {step === 4 && (
              <Box
                sx={[
                  {
                    px: { lg: 1, xs: 1 },
                    py: { lg: 4, xs: 1 },
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
                onClick={() => {}}
              >
                PCI
              </Box>
            )}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ObservationView;
