import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import React from 'react';

const AboveFooter = () => {
  return (
    <div className="container mx-auto px-8 lg:px-20 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-left">
          <div className="space-y-4 pt-4">
          <a href="/" className="text-body-main flex"><img src='/swabi logo.png' className='w-[100px]'></img> <img src='/swabi text.png' className='w-[100px] h-[50px] my-auto'></img></a>
          <p className="text-sm text-gray-600">Swabi Laundry offers premium laundry and dry cleaning services with free pickup and delivery.</p>
          </div>
        </div>

        <div className="text-left">
          <h5 className="text-xl font-semibold mb-4">Our Services</h5>
          <div className="space-y-2">
          <a href="#" className="text-body-main block">Wash and Fold Service</a>
          <a href="#" className="text-body-main block">Dry Cleaning</a>
          <a href="#" className="text-body-main block">Ironing/Pressing</a>
          <a href="#" className="text-body-main block">Stain Removal</a>
          </div>
        </div>

        <div className="text-left">
          <h5 className="text-xl font-semibold mb-4">Links</h5>
          <div className="space-y-2">
          <a href="/" className="text-body-main block">Home</a>
            <a href="/pages/aboutus" className="text-body-main block">About Us</a>
            <a href="/pages/offers" className="text-body-main block">Offers</a>
            <a href="/pages/pricing" className="text-body-main block">Prcing</a>
           
          </div>
        </div>

        <div className="text-left">
          <h5 className="text-xl  font-semibold mb-4">Contact Us</h5>
          <div className='flex flex-row'>
          <div>
          <img src='/whatsappicon.png' width={60}></img>
        </div>
        <div className=' flex flex-col pl-3 my-auto'>
        <Link href="" className="">
        Have an query?
        </Link>
        <Link href="" className="">
        +971 58 9920080
        </Link>
        </div>
        </div>
        <div className="md:p-4 py-4">
        <h5 className="text-xl  font-semibold mb-4">Follow Us</h5>
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
      </div>
      </div>
  
  );
};

export default AboveFooter;

function openCorrectChat() {
  if (typeof window.openWashy === 'function') {
    window.openWashy();
  } else if (typeof window.Intercom === 'function') {
    window.Intercom('show');
  }
}
