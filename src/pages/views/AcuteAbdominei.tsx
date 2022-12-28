import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Modal from '../../components/Modal';
import { posts } from '../MNT';
import ModuleCard from '../../components/app-ui/card/ModuleCard';

const AcuteAbdominei = () => {
  const [open, setOpen] = useState(false);
  const [timeContent, setTimeContent] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const renderContext = () => {
    if (timeContent === 'One')
      return (
        <div>
          <ModuleCard
            label='Focused Abdominei Examination'
            onClick={() => {
              setTimeContent('Two');
            }}
          />
        </div>
      );
    if (timeContent === 'Two')
      return (
        <div className='flex gap-2'>
          <ModuleCard
            label='Location'
            onClick={() => {
              setTimeContent('Three');
              handleOpen();
            }}
          />
          <ModuleCard
            label='Causation'
            onClick={() => {
              setTimeContent('Three');
              handleOpen();
            }}
          />
        </div>
      );
    if (timeContent === 'Three')
      return (
        <div>
          <ModuleCard
            label='Investigation'
            onClick={() => {
              setTimeContent('Four');
              handleOpen();
            }}
          />
        </div>
      );

    if (timeContent === 'Four')
      return (
        <div>
          <ModuleCard label='Diagnosis' />
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
              Acute Abdominei
            </h2>
            <div className='bg-white  w-full'>
              <div className='flex gap-2'>
                <ModuleCard
                  label='History'
                  onClick={() => {
                    setTimeContent('One');
                    handleOpen();
                  }}
                />
                <ModuleCard
                  label='Site'
                  onClick={() => {
                    setTimeContent('One');
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

export default AcuteAbdominei;
