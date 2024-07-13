'use client'
import React, { useState } from 'react';
import { DatePicker, Space, TimePicker } from 'antd';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const OrderForm = () => {
  const [pickupDate, setPickupDate] = useState(null);
  const [pickupTime, setPickupTime] = useState(null);
  const [buttonText, setButtonText] = useState('Submit');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDateChange = (date, dateString) => {
    setPickupDate(dateString);
  };

  const handleTimeChange = (time, timeString) => {
    setPickupTime(timeString);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending');

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      service: e.target.service.value,
      pickupDate: pickupDate,
      pickupTime: pickupTime,
    };

    try {
      const response = await fetch('/api/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setButtonText('Submit');
        setIsModalOpen(true);
        // setPickupDate(null);
        // setPickupTime(null);

      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setButtonText('Submit');
      // Handle error (e.g., show a toast notification)
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center bg-gray-100 p-4">
      <div className="md:w-[700px] lg:mr-10">
        <h1 className="text-4xl font-bold mb-2 text-center md:text-left">About Us</h1>
        <p className="text-base md:text-lg p-2 mb-2">
          Swabi Laundry offers premium laundry and dry cleaning services with free pickup and delivery. We provide professional care for all your garments, ensuring they are clean, fresh, and perfectly pressed. Our commitment to quality and customer satisfaction makes us your trusted choice for all your laundry needs.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-xl w-full lg:max-w-lg mb-8 lg:mb-0">
        <h2 className="text-2xl font-bold mb-4">Order Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number*
            </label>
            <input
              id="phone"
              name="phone"
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
              name="address"
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
              name="service"
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
            <div className="relative">
              <Space direction="vertical">
                <DatePicker onChange={handleDateChange} className="lg:w-[30vw] md:w-[90vw] w-[80vw] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </Space>
            </div>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pickup-time">
              Pickup Time*
            </label>
            <div className="relative">
              <Space wrap>
                <TimePicker use12Hours format="h:mm a" onChange={handleTimeChange} className="lg:w-[30vw] md:w-[90vw] w-[80vw] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </Space>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Order Success Modal"
        className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50 "
      >
        <div className="bg-white h-[300px] flex justify-center items-center rounded-lg p-6 w-1/2 relative">
          <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
          <div className="text-center">
            <div className="text-8xl flex justify-center items-center text-green-500 mb-4">
              <FaCheckCircle />
            </div>
            <h2 className="text-2xl font-bold mb-2">Order Successful</h2>
            <p className="text-gray-700 mb-4">Thank you so much for your order.</p>
          </div>
        </div>
      </Modal>
    </div>

  );
};

export default OrderForm;
