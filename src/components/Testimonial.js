import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className='relative bg-white py-16 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
        <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          What People Say About Us
        </p>
        <div className='w-full mt-8'>
          <Slider {...settings}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
