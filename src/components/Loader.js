import React from 'react';
import { Audio, Dna } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='w-full h-full fixed bg-white grid place-items-center'>
      <div>
        <Dna
          visible={true}
          height='80'
          width='80'
          ariaLabel='dna-loading'
          wrapperStyle={{}}
          wrapperClass='dna-wrapper'
        />
      </div>
    </div>
  );
};

export default Loader;
