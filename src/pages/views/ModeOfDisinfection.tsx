import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Modal from '../../components/Modal';
import { posts } from '../MNT';
import ModuleCard from '../../components/app-ui/card/ModuleCard';

const ModeOfDisinfection = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [step, setStep] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const renderContext = () => {
    if (content === 'Detergent')
      return (
        <>
          {step === 0 && (
            <div onClick={() => setStep(step + 1)}>
              <p>Fabric of sphyg (weekly)</p>
            </div>
          )}
          {step === 1 && (
            <div>
              <p>Metal Instrument + receptacles</p>
            </div>
          )}
        </>
      );
    if (content === 'Precept')
      return (
        <div>
          <p>Metal trollys</p>
          <p>Non faabric part of-</p>
          <ul>
            <li>Sphyg</li>
            <li>Glucometer</li>
            <li>Weighing scale</li>
            <li>Pen tourch</li>
            <li>Pulseoviometer</li>
            <li>Drip stand</li>
            <li>Nebulizer</li>
          </ul>
        </div>
      );
    if (content === 'CSSD')
      return (
        <div>
          <p>Non-disposable receptacle for body fluid or waste</p>
        </div>
      );

    return;
  };
  return (
    <Box>
      <Modal open={open} setOpen={setOpen} title={`${content}`} paragraph=''>
        {renderContext()}
      </Modal>
      <div>
        <div className='h-full '>
          <div>
            <h2 className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-center my-2'>
              Mode of Cleaning/Disinfection
            </h2>
            <div className='flex gap-2'>
              <ModuleCard
                label='Detergent'
                onClick={() => {
                  handleOpen();
                  setContent('Detergent');
                }}
              />

              <ModuleCard
                label='Precept Mositened dump-dust'
                onClick={() => {
                  handleOpen();
                  setContent('Precept');
                }}
              />
              <ModuleCard
                label='CSSD'
                onClick={() => {
                  handleOpen();
                  setContent('CSSD');
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ModeOfDisinfection;
