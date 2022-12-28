import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Modal from '../../components/Modal';
import { posts } from '../MNT';
import ModuleCard from '../../components/app-ui/card/ModuleCard';

const Cardiogenic = () => {
  const [open, setOpen] = useState(false);
  const [timeContent, setTimeContent] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const renderContext = () => {
    if (timeContent === 'Cardiac')
      return (
        <>
          <ul>
            <li>MI </li>
            <li>Arrhythomia</li>
            <li>Myocarditis</li>
            <li>Valvular Destruction</li>
            <li>Aortic Dissection</li>
          </ul>
        </>
      );
    if (timeContent === 'Extra  Cardiac')
      return (
        <>
          <ul>
            <li>Tamoponade </li>
            <li>Pneumathorax</li>
            <li>PE</li>
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
              Cardiogenic
            </h2>
            <div className='bg-white  w-full'>
              <div className='flex gap-2'>
                <ModuleCard
                  label='Cardiac'
                  onClick={() => {
                    setTimeContent('Cardiac');
                    handleOpen();
                  }}
                />
                <ModuleCard
                  label='Extra  Cardiac'
                  onClick={() => {
                    setTimeContent('Extra  Cardiac');
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

export default Cardiogenic;
