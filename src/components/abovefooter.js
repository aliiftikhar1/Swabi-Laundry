import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const AboveFooter = () => {
  const whatsappNumber = "971589920080";
  
  const generateWhatsAppLink = (service) => {
    const message = `I want to get ${service} service`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="container mt-[50px] px-8 lg:px-20 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="text-left">
          <div className="space-y-4  md:mr-6">
            <a href="/" className="text-body-main flex">
              <img src='/swabi logo.png' className='w-[100px]' alt='Swabi Logo'></img>
              <img src='/swabi text.png' className='w-[100px] h-[50px] my-auto' alt='Swabi Text'></img>
            </a>
            <p className="text-sm text-gray-600">Swabi Laundry offers premium laundry and dry cleaning services with free pickup and delivery.</p>
          </div>
        </div>

        <div className="text-left w-full lg:w-auto lg:col-span-2">
          <h5 className="text-xl font-semibold mb-4">Our Services</h5>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            {['Dry Cleaning', 'Daily Wear', 'Wash & Fold', 'Household Items', 'Wedding Dresses', 'Outerwear', 'Alterations', 'Shoes'].map(service => (
              <a key={service} href={generateWhatsAppLink(service)} className="text-body-main block">
                {service}
              </a>
            ))}
          </div>
        </div>

        <div className="text-left md:ml-4">
          <h5 className="text-xl font-semibold mb-4">Links</h5>
          <div className="space-y-2">
            <a href="/" className="text-body-main block hover:text-blue-500">Home</a>
            <a href="/pages/aboutus" className="text-body-main block hover:text-blue-500">About Us</a>
            <a href="/pages/offers" className="text-body-main block hover:text-blue-500">Offers</a>
            <a href="/pages/pricing" className="text-body-main block hover:text-blue-500">Pricing</a>
          </div>
        </div>

        <div className="text-left">
          <h5 className="text-xl font-semibold mb-4">Contact Us</h5>
          <div className='flex flex-row'>
            <a href="https://wa.me/971589920080" className='flex flex-row'>
              <div>
                <img src='/whatsappicon.png' width={60} alt="WhatsApp Icon"></img>
              </div>
              <div className='flex flex-col pl-3 my-auto'>
                <Link href="https://wa.me/971589920080" className="">
                  Have a query?
                </Link>
                <Link href="https://wa.me/971589920080" className="">
                  +971 58 9920080
                </Link>
              </div>
            </a>
          </div>
          <div className="md:p-4 py-4">
            <h5 className="text-xl font-semibold mb-4">Follow Us</h5>
            <div className="flex justify-start gap-2 text-gray-800">
              <div className='hover:text-black'>
                <FaFacebookF className="text-3xl" />
              </div>
              <div className='hover:text-black'>
                <FaTwitter className="text-3xl" />
              </div>
              <div className='hover:text-black'>
                <FaInstagram className="text-3xl" />
              </div>
              <div className='hover:text-black'>
                <FaLinkedinIn className="text-3xl" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center">
            <div className="flex md:flex-col flex-row justify-between items-center space-y-4">
              <img src="/customlogo/image.png" className="w-[100px] object-cover" alt="Women Owned Business Logo" />
              <img src="/customlogo/image1.png" className="w-[140px] object-contain" alt="Made in UAE Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboveFooter;
