import React from 'react';

const navigation = [
  {
    name: 'Term of Use',
    href: '#',
  },
  {
    name: 'Privacy Policy',
    href: '#',
  },
];

const Footer = () => {
  return (
    <footer className='bg-blue-900 py-4 '>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className='text-white hover:text-gray-500'
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className='mt-8 md:mt-0 md:order-1'>
          <p className='text-lg font-bold text-white text-center'>
            HCI Healthcare
          </p>
        </div>
      </div>
      <div className='mt-8 md:mt-0 md:order-1'>
        <p className='text-center text-base text-white'>
          &copy; 2022 HealtStack
        </p>
      </div>
    </footer>
  );
};

export default Footer;
