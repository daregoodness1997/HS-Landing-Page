import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Modal from '../../components/Modal';
import { posts } from '../MNT';
import ModuleCard from '../../components/app-ui/card/ModuleCard';

const ComaView = () => {
  const [open, setOpen] = useState(false);
  const [timeContent, setTimeContent] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const renderContext = () => {
    if (timeContent === 'Metabolic')
      return (
        <>
          <h4>Drugs </h4>
          <ul>
            <li>Glucose </li>
            <li>Septicaemia</li>
            <li>Hypothermia</li>
            <li>Endocrine ( Myxeodemia/Addison's )</li>
            <li>Hepatic eneophalopathy</li>
            <li>Urema</li>
          </ul>
        </>
      );
    if (timeContent === 'Neurological')
      return (
        <>
          <ul>
            <li>Truama </li>
            <li>Infectiion( Viral, Bacteria, Cerebral Malaria)</li>
            <li>Tumour</li>
            <li>Vascular (Stroke/SAH)</li>
            <li>Epilepsy (Non-convulsive)</li>
            <li>Epilepsy (Postetal)</li>
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
              Coma ( Unresponsive + Unrousable)
            </h2>
            <div className='bg-white  mt-6 sm:p-4  boxShadow-lg rounded-md flex  flex-col items-center justify-center inside'>
              <div className='grid gap-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12'>
                <ModuleCard
                  label='Metabolic'
                  onClick={() => {
                    setTimeContent('Metabolic');
                    handleOpen();
                  }}
                />
                <ModuleCard
                  label='Neurological'
                  onClick={() => {
                    setTimeContent('Neurological');
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

export default ComaView;
