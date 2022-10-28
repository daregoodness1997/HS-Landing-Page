import React, { useState } from 'react';
import Modal from '../components/Modal';
const posts = [
  {
    title: 'Airway Patency',
    image: 'assets/airway.png',
  },
  {
    title: 'Breathing +02',
    image: 'assets/breathing.png',
  },
  {
    title: `Circulation +IV Access`,
    image: 'assets/circulate.png',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NCTRegister = () => {
  const [open, setOpen] = useState(false);
  console.log('Open', open);

  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        title='BP Chest Paain'
        paragraph='Hearth Failure, HR>/200/min'
      />
      <div className='relative bg-gray-50'>
        <img
          className='pattern'
          src='assets/pattern.png'
          alt='pattern'
          style={{ width: '100%', position: 'relative', zIndex: '0' }}
        />
        <div className='h-screen '>
          <div className='-mt-24 negative box  '>
            <h2 className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl text-center my-4'>
              NCT
            </h2>
            <div className='mt-12 bg-white  mt-6 sm:p-4  boxShadow-lg rounded-md flex  flex-col items-center justify-center inside'>
              <div className='grid gap-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12 my-8  px-48 py-16'>
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
              <button
                type='button'
                onClick={handleClick}
                className='inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm mb-12'
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NCTRegister;
