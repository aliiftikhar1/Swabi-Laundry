import React from 'react';
import Link from 'next/link';
import TopBar from './topbar';

const DesktopNavbar = () => {
  return (
    <>
    <TopBar/>
    
    <div className="hidden lg:flex justify-between items-center w-full bg-white shadow-md fixed top-10 left-0 right-0 z-50 p-2">
      <div className="flex items-center">
        <Link href="/" aria-label="Homepage" className="flex items-center">
          <img src="/swabi logo.png" width={70} height={70} className="ml-10 pb-1" alt="Logo" />
          <img src="/swabi text.png" width={90} className="ml-5 p-1" alt="Text Logo" />
        </Link>
      </div>
      <div className="flex space-x-4">
        {/* <Link href="/how-it-works" className="nav-link hover:bg-white hover:text-blue-600 px-4 py-2 hover:rounded-lg">
          How it works
        </Link> */}
        <Link href="/" className="nav-link hover:bg-white hover:text-blue-600 px-4 py-2 hover:rounded-lg">
          Home
        </Link>
        <Link href="/pages/pricing" className="nav-link hover:bg-white hover:text-blue-600 px-4 py-2 hover:rounded-lg">
          Prices
        </Link>
        {/* <Link href="/aboutus" className="nav-link hover:bg-white hover:text-blue-600 px-4 py-2 hover:rounded-lg">
          About us
        </Link> */}
        <Link href="/pages/offers" className="nav-link hover:bg-white hover:text-blue-600 px-4 py-2 hover:rounded-lg">
          Offers
        </Link>
        <Link href="/pages/businesspage" className="nav-link hover:bg-white hover:text-blue-600 px-4 py-2 hover:rounded-lg">
          For business
        </Link>
        <Link href="/pages/FAQpage" className="nav-link hover:bg-white hover:text-blue-600 px-4 py-2 hover:rounded-lg">
          FAQ
        </Link>
        
      </div>
      <div className="flex items-center space-x-1 px-7">
        <div>
          <img src='/whatsappicon.png' width={70}></img>
        </div>
        <div className=' flex flex-col'>
        <Link href="https://wa.me/971589920080" target="_blank" rel="noopener noreferrer" className="text-left text-md">
        Schedule a <br></br>free pickup now
        <br></br>
        +971 58 9920080
        </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default DesktopNavbar;
