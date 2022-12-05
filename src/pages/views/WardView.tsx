import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Modal from '../../components/Modal';
import { posts } from '../MNT';
import ModuleCard from '../../components/app-ui/card/ModuleCard';

const WardView = () => {
  const [open, setOpen] = useState(false);
  const [timeContent, setTimeContent] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const renderContext = () => {
    if (timeContent === 'Morning')
      return (
        <ul>
          <li>Handover:Checkoutcharts ,Check Impress </li>
          <li>Identify high risk patients </li>
          <li>Grooming + breakfast </li>
          <li>Medication round/vitals and charting - NB high risk patients </li>
          <li>Organise renews-physio detician </li>
          <li>Nutrition round </li>
        </ul>
      );
    if (timeContent === 'Afternoon')
      return (
        <ul>
          <li>Huddle</li>
          <li>Reprioritise high risk patients </li>
          <li>Doctor briefring </li>
          <li>Medication round/vitals and charting </li>
          <li>Lunch </li>
        </ul>
      );
    if (timeContent === 'Evening')
      return (
        <ul>
          <li>Reprioritise high risk patients </li>
          <li>Pre-handover huddle</li>
          <li>Medication/vitals/charting </li>
          <li>Handover </li>
          <li>Night plan </li>
          <li>Light out </li>
        </ul>
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
              Ward Routine Nurse
            </h2>
            <div className='bg-white  mt-6 sm:p-4  boxShadow-lg rounded-md flex  flex-col items-center justify-center inside'>
              <div className='grid gap-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12 '>
                <ModuleCard
                  label='Morning'
                  onClick={() => {
                    setTimeContent('Morning');
                    handleOpen();
                  }}
                />
                <ModuleCard
                  label='Afternoon'
                  onClick={() => {
                    setTimeContent('Afternoon');
                    handleOpen();
                  }}
                />
                <ModuleCard
                  label='Night'
                  onClick={() => {
                    setTimeContent('Evening');
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

export default WardView;
