import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Modal from '../../components/Modal';
import { posts } from '../MNT';
import ModuleCard from '../../components/app-ui/card/ModuleCard';

const BCT = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [step, setStep] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const renderContext = () => {
    if (content === 'Regular')
      return (
        <div className='flex gap-2'>
          <ModuleCard
            label='Amiodonne'
            onClick={() => setContent('Amiodonne')}
          />
          <ModuleCard
            label='Lidocaine'
            onClick={() => setContent('Lidocaine')}
          />
        </div>
      );
    if (content === 'Irregular')
      return (
        <div className='flex gap-2'>
          <ModuleCard label='AF+BB' />
          <ModuleCard label='Torsade' />
          <ModuleCard label='AP + Pre-exitation' />
        </div>
      );
    if (content === 'Amiodonne')
      return (
        <div>
          <h3>Amiodonne</h3>
          <div>300mg IV oover 20-60min then 900mg over 24hr </div>
        </div>
      );
    if (content === 'Lidocaine')
      return (
        <div>
          <h3>Lidocaine</h3>
          <div>See BNR </div>
        </div>
      );

    return;
  };
  return (
    <Box>
      <Modal
        open={open}
        setOpen={setOpen}
        title={`${content} Routine`}
        paragraph=''
      >
        {renderContext()}
      </Modal>
      <div>
        <div className='h-full '>
          <div>
            <h2 className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-center my-2'>
              Acute Coronary Syndrome No ST
            </h2>
            {step === 0 && (
              <ModuleCard label='BCT' onClick={() => setStep(step + 1)} />
            )}
            {step === 1 && (
              <ModuleCard
                label='Airway Patency'
                onClick={() => setStep(step + 1)}
              />
            )}
            {step === 2 && (
              <ModuleCard
                label='Breathing O2'
                onClick={() => setStep(step + 1)}
              />
            )}
            {step === 3 && (
              <ModuleCard
                label='Check Electrolyte'
                onClick={() => setStep(step + 1)}
              />
            )}
            {step === 4 && (
              <ModuleCard
                label='Determine Ryhythm'
                onClick={() => setStep(step + 1)}
              />
            )}
            {step === 5 && (
              <div className='flex gap-2'>
                <ModuleCard
                  label='Regular Ryhythm'
                  onClick={() => {
                    handleOpen();
                    setContent('Regular');
                  }}
                />
                <ModuleCard
                  label='Irregular Ryhythm'
                  onClick={() => {
                    handleOpen();
                    setContent('Irregular');
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default BCT;
