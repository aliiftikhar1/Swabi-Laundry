import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const AboveFooter = () => {
  const whatsappLink = "https://wa.me/971589920080";

  return (
    <div className="container mt-[50px] px-8 lg:px-20 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="text-left">
          <div className="space-y-4 pt-4">
            <a href="/" className="text-body-main flex">
              <img src='/swabi logo.png' className='w-[100px]'></img>
              <img src='/swabi text.png' className='w-[100px] h-[50px] my-auto'></img>
            </a>
            <p className="text-sm text-gray-600">Swabi Laundry offers premium laundry and dry cleaning services with free pickup and delivery.</p>
          </div>
        </div>

        <div className="text-left w-[280px]">
          <h5 className="text-xl font-semibold mb-4">Our Services</h5>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <a href={whatsappLink} className="text-body-main block">
              Dry Cleaning
            </a>
            <a href={whatsappLink} className="text-body-main block">
              Daily Wear
            </a>
            <a href={whatsappLink} className="text-body-main block">
              Wash & Fold
            </a>
            <a href={whatsappLink} className="text-body-main block">
              Household Items
            </a>
            <a href={whatsappLink} className="text-body-main block">
              Wedding Dresses
            </a>
            <a href={whatsappLink} className="text-body-main block">
              Outerwear
            </a>
            <a href={whatsappLink} className="text-body-main block">
              Alterations
            </a>
            <a href={whatsappLink} className="text-body-main block">
              Shoes
            </a>
          </div>
        </div>

        <div className="text-left ml-4">
          <h5 className="text-xl font-semibold mb-4 ">Links</h5>
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
            <div className=' flex flex-col pl-3 my-auto'>
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
                <FaInstagram href='https://www.instagram.com/swabi.laundry?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className="text-3xl" />
              </div>
              <div className='hover:text-black'>
                <FaLinkedinIn className="text-3xl" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center">
            <div className="flex flex-col items-center space-y-4">
              <img src="/customlogo/image.png" className="w-[100px] object-cover " alt="Women Owned Business Logo" />
              <img src="/customlogo/image1.png" className="w-[140px] object-contain" alt="Made in UAE Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboveFooter;
