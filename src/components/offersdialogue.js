import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const OfferDialog = ({ googleMapsUrl, locationName }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [rating, setRating] = useState(null);
  const [placeId, setPlaceId] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchPlaceId = async () => {
      try {
        const response = await fetch(`/api/getrating?locationName=${encodeURIComponent(locationName)}`);
        const data = await response.json();
        if (data.placeId) {
          setPlaceId(data.placeId);
        } else {
          setRating('N/A');
        }
      } catch (error) {
        console.error('Error fetching place ID:', error);
        setRating('N/A');
      }
    };

    if (locationName) {
      fetchPlaceId();
    }
  }, [locationName]);

  useEffect(() => {
    const fetchGoogleRating = async () => {
      if (!placeId) return;

      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating&key=AIzaSyCHpj7zdMIzGEAtr6u_FjvGZO76-T73hLI` // Replace with your actual API key
        );

        const data = await response.json();
        if (data.result && data.result.rating) {
          setRating(data.result.rating);
        } else {
          setRating('N/A');
        }
      } catch (error) {
        console.error('Error fetching Google rating:', error);
        setRating('N/A');
      }
    };

    fetchGoogleRating();
  }, [placeId]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="relative flex flex-col md:flex-row items-center p-4 md:p-6 bg-white shadow-lg rounded-lg w-11/12 max-w-3xl mx-auto md:h-auto h-auto md:h-90">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white bg-red-500 rounded-full p-1 hover:text-gray-700"
        >
          <FaTimes size={24} />
        </button>
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src="/van.jpeg"
            alt="DipDap Van"
            className="rounded-lg w-full h-auto max-h-60 md:max-h-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-6">
          <div className="flex flex-col items-center md:items-start md:mb-2">
            <img src='/google.png' width={150} height={150} alt="Google Logo" className="mb-2 md:mb-0" />
            <div className="flex items-center">
              <span className="text-yellow-500 text-xl md:text-2xl lg:text-4xl">★ ★ ★ ★ ★</span>
              <span className="ml-2 text-lg md:text-xl lg:text-2xl text-gray-700">
                {rating !== null ? `${rating} STAR` : 'Loading...'}
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg">CUSTOMER RATING</p>
          <div className="md:mt-4">
            <p className="text-green-500 font-semibold text-lg md:text-xl">Free Pick Up & Delivery</p>
            <p className="text-gray-700 text-sm md:text-base">20% off for the 1st 3 orders</p>
            <p className="text-gray-700 text-sm md:text-base">No Hidden Cost</p>
          </div>
          <div className="md:mt-4 flex md:flex-row items-center md:items-start md:justify-start">
            <a
              href="tel:+971585927959"
              className="block w-full md:w-auto text-sm md:text-md bg-green-500 text-white font-bold py-2 md:py-2 px-1 md:px-4 rounded m-1 mb-2 md:mb-0 md:mr-2 md:m-0 text-center"
            >
              +971-585927959
            </a>
            <button className="block w-full md:w-auto text-sm md:text-md bg-green-500 text-white font-bold py-2 px-4 m-1 mb-2 md:mb-0 md:mr-2 md:m-0 rounded text-center">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

OfferDialog.propTypes = {
  googleMapsUrl: PropTypes.string,
  locationName: PropTypes.string.isRequired,
};

export default OfferDialog;
