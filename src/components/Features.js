import React from 'react';
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from '@heroicons/react/outline';

const communicationFeatures = [
  {
    id: 1,
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: 'Reminder emails',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MailIcon,
  },
];
const features = [
  {
    name: 'Web based app',
    description:
      'Our platform can be accessed easily from any browser across all devices. You don’t need to download another app on your mobile device.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Quality resource',
    description:
      'Get in-depth information about common problems that patients present with in just a few minutes.',
    icon: ScaleIcon,
  },
  {
    name: 'Multiple specialities',
    description:
      'Our product can be used by different medical specialists and sub-specialists.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Regular updates',
    description:
      'Our library of medical information is regularly updated to add new medical conditions.',
    icon: MailIcon,
  },
];

const Features = () => {
  return (
    // <></>
    <section className='relative bg-white py-16 sm:py-24 lg:py-32bg-white'>
      <div className='mx-auto max-w-md px-4 text-left sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center '>
          <div className='lg:col-start-2'>
            <h1 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl title '>
              Features
            </h1>
            <p className='mt-3 text-lg text-gray-500 text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              ex obcaecati natus eligendi delectus, cum deleniti sunt in labore
              nihil quod quibusdam expedita nemo.
            </p>
          </div>

          <div className='mt-10 -mx-4 relative lg:mt-0 lg:col-start-1 p-4 sm:p-8'>
            <dl className='mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2'>
              {features.map(feature => (
                <div
                  key={feature.name}
                  className='shadow-lg p-6 rounded-md bg-white hover:bg-blue-900 group'
                >
                  <dt>
                    <p className='mt-5 text-lg leading-6 font-medium text-gray-900 text-left group-hover:text-white '>
                      {feature.name}
                    </p>
                  </dt>
                  <dd className='mt-2 text-base text-gray-500 text-left  group-hover:text-white '>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
