import React from 'react';

const features = [
  {
    name: 'DOCTOR',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
  {
    name: 'MEDICAL PRACTIONERS',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
  {
    name: 'MEDICAL STUDENTS',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
];

const WhoItIs = () => {
  return (
    <section className='relative bg-white py-16 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl title'>
          Who it is for
        </h1>
        <p className='mx-auto mt-5 max-w-prose text-xl text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map(feature => (
              <div key={feature.name} className='pt-6'>
                <div className='flow-root rounded-lg bg-white py-8 px-6 flex align-center justify-center shadow-lg'>
                  <div className='w-full grid place-items-center'>
                    <img
                      src='/assets/doc.png'
                      alt=''
                      className='w-24 h-24 rounded-full'
                    />
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

export default WhoItIs;
