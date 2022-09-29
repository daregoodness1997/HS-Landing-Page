import React from 'react';

const features = [
  {
    name: 'Register/Log in',
    description:
      'Register to create your account or log in if you already have an account',
  },
  {
    name: 'Search our extensive library',
    description:
      'Search for any medical condition that you need information on.',
  },
  {
    name: 'Get what you need',
    description:
      'The information you need is provided in short notes that are easy to read and understand.',
  },
];

const HowItWorks = () => {
  return (
    <section
      className='relative bg-white py-16 sm:py-24 lg:py-32 bg-blue-50'
      id='how-it-works'
    >
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
        <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          How It Works
        </p>
        <p className='mx-auto mt-5 max-w-prose text-xl text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 '>
            {features.map(feature => (
              <div key={feature.name}>
                <div className='flow-root rounded-lg flex align-center justify-center '>
                  <div className='w-full grid place-items-center'>
                    <img src='/assets/doc.png' alt='' className='w-48 h-48 ' />
                  </div>

                  <h3 className='mt-8 text-lg font-black tracking-tight text-gray-900'>
                    {feature.name}
                  </h3>
                  <p className='mt-5 text-base text-gray-500'>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
