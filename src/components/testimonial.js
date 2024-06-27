import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    designation: 'CEO, Company Inc.',
    testimonial: 'This is the best service I have ever used. Highly recommend to everyone!',
    image: '/businessman.png',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    designation: 'CTO, Another Company',
    testimonial: 'Outstanding experience! The team was very professional and the end result was amazing.',
    image: '/businessman.png',
    rating: 4,
  },
  {
    name: 'Sam Wilson',
    designation: 'Manager, Some Company',
    testimonial: 'Great service and very attentive to details. Will definitely use again.',
    image: '/businessman.png',
    rating: 4.5,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="text-yellow-500" />
      ))}
      {halfStar && <FaStar className="text-yellow-500 half-star" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaStar key={i + fullStars} className="text-gray-300" />
      ))}
    </div>
  );
};

const TestimonialCard = ({ name, designation, testimonial, image, rating }) => (
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-6 bg-white flex flex-col items-center mb-8">
    <div className="text-center px-4">
      <div className="font-bold text-xl mt-2 mb-1">{name}</div>
      <span className="text-gray-600 text-lg mb-2">{designation}</span>
      <p className="text-gray-700 mb-4 text-md">{testimonial}</p>
    </div>
    <StarRating rating={rating} />
  </div>
);

const Testimonials = () => {
  return (
    <><h1 className="text-4xl font-bold text-center py-10 text-gray-800">Customer Testimonials</h1>
    <div className="container mx-auto px-4  flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Testimonials;
