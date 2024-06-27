import React from 'react';

const OrderForm = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl lg:mr-10">
        <h1 className="text-4xl lg:text-6xl font-bold md:mb-10 mb-5 text-left">Order Form</h1>
        <h3 className="text-2xl font-bold md:mb-4 mb-1 p-3 md:p-0">Discover our laundry services designed to meet all of your needs.</h3>
        <ul className="list-disc text-sm list-inside mb-4 p-3 md:p-0">
          <li>HomeCare for your household linens</li>
          <li>Clean & Press for a professional garment care experience</li>
          <li>Wash & Fold for non-pressed items</li>
          <li>Shoe Laundry Restore your shoes with our service</li>
          <li>Press Only for clean clothes that require pressing</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-xl w-full lg:max-w-lg mb-8 lg:mb-0 ">
        <h2 className="text-2xl font-bold mb-4">Pick Up & Delivery (100% Free)</h2>
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
