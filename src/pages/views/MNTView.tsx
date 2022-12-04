import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import Modal from '../../components/Modal';
import { posts } from '../MNT';

const MNTView = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(false);
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
      <div>
        <div className='h-full '>
          <div>
            <h2 className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-center my-2'>
              Management of Narrow Complex Tachycardia (NCT)
            </h2>
            <div className='bg-white  mt-6 sm:p-4  boxShadow-lg rounded-md flex  flex-col items-center justify-center inside'>
              <div className='grid gap-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12 '>
                {posts.map(post => (
                  <div
                    key={post.title}
                    className='flex flex-col items-center justify-center'
                  >
                    <img className='' src={post.image} alt={post.title} />
                    <a href={post.href} className='block mt-4'>
                      <p className='text-xl font-semibold text-gray-900'>
                        {post.title}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
              <button
                type='button'
                onClick={() => handleOpen()}
                className='inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm mb-12'
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default MNTView;
