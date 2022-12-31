import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Modal from '../../components/Modal';
import { posts } from '../MNT';
import ModuleCard from '../../components/app-ui/card/ModuleCard';

const Antenatal = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [step, setStep] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const renderContext = () => {
    if (content === '20 weeks')
      return (
        <div>
          <h3>Less than 20 weeks every 4 weeks</h3>
          <ul>
            <li>First Visit</li>
            <li>Other Visit</li>
          </ul>
        </div>
      );
    if (content === '28 weeks')
      return (
        <div>
          <h3>20 -28 Weeks</h3>
          <ul>
            <li>Monitorr</li>
            <li>Education</li>
            <li>Prevention</li>
          </ul>
        </div>
      );
    if (content === '28 Weeks or more')
      return (
        <div>
          <h3>20 -28 Weeks</h3>
          <ul>
            <li>Monitorr</li>
            <li>Education</li>
            <li>Prevention</li>
          </ul>
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
              Antenatal
            </h2>
            {step === 0 && (
              <ModuleCard
                label='Pregnacy - Antenatal Care'
                onClick={() => setStep(step + 1)}
              />
            )}
            {step === 1 && (
              <ModuleCard label='Goal' onClick={() => setStep(step + 1)} />
            )}
            {step === 2 && (
              <div className='flex gap-2'>
                <ModuleCard
                  label='Monitoring'
                  onClick={() => setStep(step + 1)}
                />
                <ModuleCard
                  label='Education'
                  onClick={() => setStep(step + 1)}
                />
                <ModuleCard
                  label='Prevention of complication'
                  onClick={() => setStep(step + 1)}
                />
              </div>
            )}
            {step === 3 && (
              <div className='flex gap-2'>
                <ModuleCard
                  label='Less than  20 weeks every 4 weeks'
                  onClick={() => {
                    handleOpen();
                    setContent('20 weeks');
                  }}
                />
                <ModuleCard
                  label='20 - 28 Weeks'
                  onClick={() => {
                    handleOpen();
                    setContent('28 weeks');
                  }}
                />
                <ModuleCard
                  label='28 Weeks or more'
                  onClick={() => {
                    handleOpen();
                    setContent('28 Weeks or more');
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

export default Antenatal;
