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
    if (timeContent === 'Post Up') return <h3>Q 15 min X2 ( If Stable) </h3>;
    if (timeContent === 'Stable') return <h3>Hourly</h3>;
    if (timeContent === 'Unstable') return <h3>Dew</h3>;
    if (timeContent === 'Blood Transfusion')
      return (
        <ul>
          <li>Before transfusion</li>
          <li>5 min into transfusion</li>
          <li>Every hour until completed</li>
          <li>Every hour X after tranfusion</li>
        </ul>
      );

    return;
  };

  const renderStepContent = () => {
    if (timeContent === 'ICU')
      return (
        <div className='bg-white  w-full'>
          <div className='flex gap-2'>
            <ModuleCard
              label='Stable'
              onClick={() => {
                setTimeContent('Stable');
                handleOpen();
              }}
            />
            <ModuleCard
              label='Unstable'
              onClick={() => {
                setTimeContent('Unstable');
                handleOpen();
              }}
            />
          </div>
        </div>
      );

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
                    setTimeContent('ICU');
                  }}
                />
                <ModuleCard
                  label='Post Up'
                  onClick={() => {
                    setTimeContent('Post Up');
                    handleOpen();
                  }}
                />
                <ModuleCard
                  label='Blood Transfusion'
                  onClick={() => {
                    setTimeContent('Blood Transfusion');
                    handleOpen();
                  }}
                />
              </div>
            )}
            {step === 1 && <>{renderStepContent()}</>}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ObservationView;
