import React from 'react';
import CardsComponent from './cardscomponent';

const Benefits = () => {
  return (
    <div className='w-full items-center p-10'>
      <div className='w-full max-w-5xl mx-auto text-center py-5'>
        <h1 className='text-3xl md:text-6xl text-black font-bold'>
          We collect, clean, and deliver your laundry and dry cleaning.
        </h1>
      </div>
      <CardsComponent />
      <div className="mt-2 hidden w-auto md:flex items-center justify-center">
        <a
          href="https://wa.me/971589920080"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Schedule your pickup
        </a>
      </div>
    </div>
  );
};

export default Benefits;
