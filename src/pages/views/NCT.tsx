import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Modal from '../../components/Modal';
import { posts } from '../MNT';
import ModuleCard from '../../components/app-ui/card/ModuleCard';
import Button from '../../components/app-ui/Button';

const NCT = () => {
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
          <ul>
            <li>BP</li>
            <li>Chest Pain</li>
            <li>Hearth Failure </li>
            <li>{`HR>/200/min`}</li>
          </ul>

          <ModuleCard
            label='Vagastoric'
            onClick={() => setContent('Vagastoric')}
          />
        </div>
      );
    if (content === 'Irregular')
      return (
        <div>
          <h3>Steps</h3>
          <ul>
            <li>Get Expert Help</li>
            <li>Synchornized DC Cardioversioon</li>
          </ul>
        </div>
      );
    if (content === 'Vagastoric')
      return (
        <div className='flex gap-2'>
          <ModuleCard
            label='Successful'
            onClick={() => setContent('Successful')}
          />{' '}
          <ModuleCard
            label='Unsuccessful'
            onClick={() => setContent('Unsuccessful')}
          />
        </div>
      );
    if (content === 'Successful')
      return (
        <div>
          <h3>Steps</h3>
          <ul>
            <li>Digoxin</li>
            <li>Amiodorane</li>
            <li>Verpamile </li>
            <li>Esmolol</li>
          </ul>
        </div>
      );
    if (content === 'Unsuccessful')
      return (
        <div>
          <h3>Steps</h3>
          <ul>
            <li>ECG</li>
            <li>Investigation</li>
            <li>Cardiology renew </li>
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
              Acute Coronary Syndrome No ST
            </h2>
            {step === 0 && (
              <ModuleCard label='NCT' onClick={() => setStep(step + 1)} />
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
                label='Circulation IV Access'
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

export default NCT;
