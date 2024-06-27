import React from 'react';

const ReviewStrip = () => {
  return (
    <div className="bg-blue-800 py-6 text-center md:text-left">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h3 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-3" id="landingReviewStripTitle">
          Ranked #1 by customers
        </h3>
        <p className="text-white text-lg" id="landingReviewStripSubtitle">
          in categories Dry cleaner, Laundry service and Laundrette
        </p>
      </div>
    </div>
  );
};

export default ReviewStrip;
