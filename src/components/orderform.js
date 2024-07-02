import React from 'react';

const OrderForm = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl lg:mr-10">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-base md:text-lg">
        Swabi Laundry offers premium laundry and dry cleaning services with free pickup and delivery. We provide professional care for all your garments, ensuring they are clean, fresh, and perfectly pressed. Our commitment to quality and customer satisfaction makes us your trusted choice for all your laundry needs.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-xl w-full lg:max-w-lg mb-8 lg:mb-0">
        <h2 className="text-2xl font-bold mb-4">Order Form</h2>
        <form>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number*
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Phone Number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Flat No, Building Name, Area Name*
            </label>
            <textarea
              id="address"
              placeholder="Flat No, Building Name, Area Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
              Service Required (Min Order value AED 50)
            </label>
            <select
              id="service"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Please Select</option>
              <option>HomeCare</option>
              <option>Clean & Press</option>
              <option>Wash & Fold</option>
              <option>Shoe Laundry</option>
              <option>Press Only</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pickup-date">
              Pickup Date*
            </label>
            <input
              id="pickup-date"
              type="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pickup-time">
              Pickup Time*
            </label>
            <input
              id="pickup-time"
              type="time"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
