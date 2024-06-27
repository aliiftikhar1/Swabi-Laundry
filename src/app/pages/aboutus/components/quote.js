import React from 'react';

function Quote() {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat h-[400px] md:h-[600px] mb-20" style={{ backgroundImage: 'url("/your-background-image.jpg")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-white px-3 md:px-10 leading-tight">
          Delivering Freshness to Your Doorstep
        </h1>
        <p className="text-lg md:text-xl text-white px-3 md:px-10 mt-5">
          Discover the convenience of Laundryheap's fast and reliable laundry and dry cleaning services. We ensure your clothes are cleaned with care and delivered back to you on time.
        </p>
        <p className="text-lg md:text-xl text-white px-3 md:px-10 mt-5">
          Experience the difference today!
        </p>
      </div>
    </div>
  );
}

export default Quote;
