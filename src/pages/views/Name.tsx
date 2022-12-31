import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Modal from '../../components/Modal';
import { posts } from '../MNT';
import ModuleCard from '../../components/app-ui/card/ModuleCard';

const Name = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [step, setStep] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const renderContext = () => {
    if (content === 'Indentifiers')
      return (
        <div>
          <ul>
            <li>Date of Birth</li>
            <li>Hospital Number</li>
            <li>Address</li>
          </ul>
        </div>
      );
    if (content === 'Clinical')
      return (
        <div>
          <ul>
            <li>Diagnosis</li>
            <li>Lab Result</li>
            <li>Radiology Result</li>
            <li>Clinical Score</li>
          </ul>
        </div>
      );
    if (content === 'Treatment')
      return (
        <>
          {step === 0 && (
            <div className='flex gap-2'>
              <ModuleCard
                label='Diet'
                onClick={() => {
                  setContent('Diet');
                }}
              />
              <ModuleCard
                label='Fluid'
                onClick={() => {
                  setContent('Fluid');
                }}
              />
              <ModuleCard label='Medication' />
            </div>
          )}
        </>
      );

    if (content === 'Diet')
      return (
        <>
          <div className='flex gap-2'>
            <ModuleCard label='Yes' />
            <ModuleCard label='No' />
          </div>
        </>
      );
    if (content === 'Fluid')
      return (
        <>
          <div className='flex gap-2'>
            <ModuleCard label='Yes' />
            <ModuleCard label='No' />
          </div>
        </>
      );

    return;
  };
  return (
    <Box>
      <Modal open={open} setOpen={setOpen} title={`${content} `} paragraph=''>
        {renderContext()}
      </Modal>
      <div>
        <div className='h-full '>
          <div>
            <h2 className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-center my-2'>
              Name
            </h2>
            <div className='flex gap-2'>
              <ModuleCard
                label='Indentifiers'
                onClick={() => {
                  setContent('Indentifiers');
                  handleOpen();
                }}
              />
              <ModuleCard
                label='Clinical Information'
                onClick={() => {
                  setContent('Clinical');
                  handleOpen();
                }}
              />
              <ModuleCard
                label='Treatment'
                onClick={() => {
                  setContent('Treatment');
                  handleOpen();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Name;
