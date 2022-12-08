import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Modal from '../../components/Modal';
import { posts } from '../MNT';
import { BottomWrapper } from '../../components/app-ui/styles';
import AppButton from '../../components/app-ui/app-button';

const NCTView = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [content, setContent] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Box>
      <Modal
        open={open}
        setOpen={setOpen}
        title='BP Chest Paain'
        paragraph='Hearth Failure, HR>/200/min'
        children=''
      />
      {step === 0 && (
        <div className='bg-white  mt-6 sm:p-4  boxShadow-lg rounded-md flex  flex-col items-center justify-center inside'>
          <div className='grid gap-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12 '>
            {posts.map(post => (
              <Box
                sx={[
                  { p: 2, br: 10 },
                  {
                    '&:hover': {
                      background: '#f3f3f3',
                      color: '#222',
                    },
                  },
                ]}
                key={post.title}
                onClick={() => {
                  setStep(step + 1);
                  setContent(post.title);
                }}
                className='flex flex-col items-center justify-center'
              >
                <img className='' src={post.image} alt={post.title} />
                <a href={post.href} className='block mt-4'>
                  <p className='text-xl font-semibold text-gray-900'>
                    {post.title}
                  </p>
                </a>
              </Box>
            ))}
          </div>
        </div>
      )}
      {step === 1 && (
        <div>
          <div className='h-full '>
            <div>
              <h2 className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-center my-2'>
                Narrow Complex Tachycardia (NCT)
              </h2>
              <div className='bg-white   sm:p-4  boxShadow-lg rounded-md flex  flex-col items-center justify-center inside'>
                <div className='grid gap-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12  px-8 '>
                  <div>
                    <h2 className='text-xl leading-6 font-bold text-gray-900'>
                      Irregular Rhythm
                    </h2>
                  </div>
                  <div>
                    <ul>
                      <li>BP</li>
                      <li>Chest Pain</li>
                      <li>Hearth Failure </li>
                      <li>{`HR>/200/min`}</li>
                    </ul>
                  </div>
                </div>
                {/* <button
                  type='button'
                  onClick={() => setStep(step + 1)}
                  className='inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm mb-12'
                >
                  Continue
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomWrapper>
        <button onClick={() => setOpen(false)}>Clear</button>
        <AppButton label='Continue' type='submit' />
      </BottomWrapper>
    </Box>
  );
};

export default NCTView;
