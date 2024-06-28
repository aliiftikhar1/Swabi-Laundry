// components/PricingCard.js
import Image from 'next/image';

const Offerscards = ({ price, unit, description, imageSrc, ctaText }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg">
          {price}
        </div>
        <Image src={imageSrc} alt={description} className="w-full h-48 object-contain" width={600} height={400} />
      </div>
      <div className="p-4 justify-center text-center">
        <h3 className="text-xl font-semibold mb-2">{description}</h3>
        <p className="text-gray-600">{unit}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-700">
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default Offerscards;
