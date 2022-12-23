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
    if (timeContent === 'Chest Pain')
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
              Acute Pulmonary Syndrome ST
            </h2>
            <div className='bg-white  mt-6 sm:p-4  boxShadow-lg rounded-md flex  flex-col items-center justify-center inside'>
              <div className='grid gap-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12'>
                <ModuleCard
                  label='Chest Pain'
                  onClick={() => {
                    setTimeContent('Chest Pain');
                    handleOpen();
                  }}
                />
                <ModuleCard label='SOB' />
                <ModuleCard label='Arrhythmia' />
                <ModuleCard label='Cardiac Arrest' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default AcutePulmonaryView;
