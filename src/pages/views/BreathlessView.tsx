import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Modal from '../../components/Modal';
import { posts } from '../MNT';
import ModuleCard from '../../components/app-ui/card/ModuleCard';

const BreathlessView = () => {
  const [open, setOpen] = useState(false);
  const [timeContent, setTimeContent] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const renderContext = () => {
    if (timeContent === 'Wheezing')
      return (
        <>
          <ul>
            <li>Asthma </li>
            <li>CoPD</li>
            <li>Heart Failure</li>
            <li>Anaphyloxis</li>
          </ul>
        </>
      );
    if (timeContent === 'Stridor')
      return (
        <>
          <ul>
            <li>FB/Tumour </li>
            <li>Acute epiglottitis</li>
            <li>Anaphylaxis</li>
            <li>Laryngeal Fracture</li>
          </ul>
        </>
      );
    if (timeContent === 'Crepitations')
      return (
        <>
          <ul>
            <li>Heart Failure </li>
            <li>Pneoumonia</li>
            <li>Bronchiectasis</li>
            <li>Fibrosis</li>
          </ul>
        </>
      );
    if (timeContent === 'Uear')
      return (
        <>
          <ul>
            <li>PE </li>
            <li>Hyper Ventilation</li>
            <li>Metabaidosis</li>
            <li>Anaemia</li>
            <li>Drugs (Sallicyiates)</li>
            <li>PCP</li>
            <li>CNSouses</li>
          </ul>
        </>
      );
    if (timeContent === 'Others')
      return (
        <>
          <ul>
            <li>Pneumothrax </li>
            <li>Pleural effusion</li>
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
              Breathlessness{' '}
            </h2>
            <div className='bg-white  mt-6 sm:p-4  boxShadow-lg rounded-md flex  flex-col items-center justify-center inside'>
              <div className='grid gap-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12'>
                <ModuleCard
                  label='Wheezing'
                  onClick={() => {
                    setTimeContent('Wheezing');
                    handleOpen();
                  }}
                />
                <ModuleCard
                  label='Stridor'
                  onClick={() => {
                    setTimeContent('Stridor');
                    handleOpen();
                  }}
                />
                <ModuleCard
                  label='Crepitations'
                  onClick={() => {
                    setTimeContent('Crepitations');
                    handleOpen();
                  }}
                />
                <ModuleCard
                  label='Uear'
                  onClick={() => {
                    setTimeContent('Uear');
                    handleOpen();
                  }}
                />
                <ModuleCard
                  label='Others'
                  onClick={() => {
                    setTimeContent('Others');
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

export default BreathlessView;
