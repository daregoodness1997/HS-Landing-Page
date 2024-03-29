import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Modal from '../../../components/Modal';
import { posts } from '../../MNT';
import ModuleCard from '../../../components/app-ui/card/ModuleCard';
import ModalBox from '../../../components/app-ui/modal';
import { BottomWrapper } from '../../../components/app-ui/styles';
import AppButton from '../../../components/app-ui/app-button';
import Pulse from './flows/Pulse';
import CVs from './flows/CVs';

const AntenatalView = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [step, setStep] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const renderContent = () => {
    if (content === 'Pulse') return <Pulse />;
    if (content === 'CVS') return <CVs />;
  };

  return (
    <Box>
      <div>
        <div className='h-full '>
          <div>
            <h2 className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-center my-2'>
              Management of Broad Complex Taclycardia
            </h2>
            <div className='bg-white  mt-6 sm:p-4  boxShadow-lg rounded-md flex  flex-col items-center justify-center inside'>
              {step === 0 && (
                <div className='grid gap-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12'>
                  <ModuleCard
                    label='Pulse'
                    onClick={() => {
                      setContent('Pulse');
                      setStep(step + 1);
                      handleOpen();
                    }}
                  />
                  <ModuleCard
                    label='CVS'
                    onClick={() => {
                      setContent('CVS');
                      setStep(step + 1);
                    }}
                  />
                </div>
              )}

              {step === 1 && renderContent()}
            </div>
          </div>
        </div>
      </div>
      <BottomWrapper>
        <button onClick={() => setStep(step - 1)}>Back</button>

        <AppButton label='Continue' onClick={() => handleClose()} />
      </BottomWrapper>
    </Box>
  );
};

export default AntenatalView;
