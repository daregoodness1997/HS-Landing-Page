import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Modal from '../../components/Modal';
import { posts } from '../MNT';
import ModuleCard from '../../components/app-ui/card/ModuleCard';

const AcutePulmonaryView = () => {
  const [open, setOpen] = useState(false);
  const [timeContent, setTimeContent] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const renderContext = () => {
    if (timeContent === 'Causes')
      return (
        <>
          <ul>
            <li>Isohemic Heart Disease </li>
            <li>MI</li>
            <li>Valvular Heart Disease</li>
            <li>Arrhythmia</li>
            <li>Fluid Overload</li>
            <li>Head Injury</li>
          </ul>
        </>
      );
    if (timeContent === 'Differential')
      return (
        <>
          <ul>
            <li>Nurse Semi-prime </li>
            <li>O2 </li>
            <li>IV Access</li>
            <li>BCG Monitoring</li>
            <li>Diamorphine 2.5mg IV Slowly,Feximde 40-80mg</li>
            <li>Nitrate Infusion if systollic BP {`>=`} 100mmhz </li>
            <li>If BP {`>=`} 100mmhz systtollic treat as cardiogenic shock </li>
            <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>
              GET HELP EARLY{' '}
            </h1>
          </ul>
        </>
      );
    if (timeContent === 'Treatment')
      return (
        <>
          <ul>
            <li>BCG </li>
            <li>CXR</li>
            <li>UTE</li>
            <li>ABG</li>
            <li>BCHO</li>
          </ul>
        </>
      );
    if (timeContent === 'Investigation')
      return (
        <>
          <ul>
            <li>Chest Pain @rest </li>
            <li>Chest Pain over zomin</li>
            <li>Chest Pain + autonomic symptoms</li>
          </ul>
        </>
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
              Acute Pulmonary Oedema{' '}
            </h2>
            <div className='bg-white  mt-6 sm:p-4  boxShadow-lg rounded-md flex  flex-col items-center justify-center inside'>
              <div className='grid gap-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12'>
                <ModuleCard
                  label='Causes'
                  onClick={() => {
                    setTimeContent('Causes');
                    handleOpen();
                  }}
                />
                <ModuleCard
                  label='Differential'
                  onClick={() => {
                    setTimeContent('Differential');
                    handleOpen();
                  }}
                />
                <ModuleCard
                  label='Treatment'
                  onClick={() => {
                    setTimeContent('Treatment');
                    handleOpen();
                  }}
                />
                <ModuleCard
                  label='Investigation'
                  onClick={() => {
                    setTimeContent('Investigation');
                    handleOpen();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default AcutePulmonaryView;
