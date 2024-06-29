// components/PricingCard.js
import Image from 'next/image';

const Offerscards = ({ price, unit, description, imageSrc, ctaText }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg border-1 p-2 border-green-500 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full">
      <div className="relative">
        <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-lg">
          {price}
        </div>
        <img src={imageSrc} alt={description} className="w-full h-48 object-contain rounded-lg" width={600} height={400} />
      </div>
      <div className="flex flex-col flex-grow p-4 text-center">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{description}</h3>
        <p className="text-gray-500 mb-4">{unit}</p>
        <div className="mt-auto">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-2xl hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105">
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offerscards;
