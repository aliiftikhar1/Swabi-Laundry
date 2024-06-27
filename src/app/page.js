// pages/index.js


'use client'
import About from "@/components/about";
import AboveFooter from "@/components/abovefooter";
import Benefits from "@/components/Benefits";
import CardsComponent from "@/components/cardscomponent";
import ContactComponent from "@/components/contact";
import Footer2 from "@/components/Footer2";
import Navbar from "@/components/Header";
import Hero from "@/components/Herosection";
import LaundryServices from "@/components/laundryservices";
import OfferDialog from "@/components/offersdialogue";
import OrderForm from "@/components/orderform";
import Productpropcomponent from "@/components/productprop";
import ServiceComparison from "@/components/Servicecomparison";
import ReviewStrip from "@/components/Strip";
import Testimonials from "@/components/testimonial";
import WhatsAppButton from "@/components/whatsappbutton";

export default function Home() {
  return (
    <div className="w-full">
      <OfferDialog 
        googleMapsUrl="https://maps.app.goo.gl/owFNrAMn1L1z8WJHA" // Replace with your actual Google Maps URL
        locationName="Swabi Laundry and Dry Cleaning Service"
        
      />
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <LaundryServices/>
      <ReviewStrip />
      <Benefits />
      <Productpropcomponent
        benefit="Laudry to Laundy"
        image="/propimg4.png"
        title="A laundry service designed for you"
        description1="Never worry about staining your favourite shirt. We offer laundry, dry cleaning and ironing at a schedule that fits your lifestyle."
        align="left"
      />
      <Productpropcomponent
        benefit="24H TURNAROUND TIME"
        image="/propimg2.jpg"
        title="No need to plan in advance"
        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>}
        icondescription="24 hours available"
        icon2={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>}
        icondescription2="30 hours available"
        description1="Never worry about staining your favourite shirt. We offer laundry, dry cleaning and ironing at a schedule that fits your lifestyle."
        align="right"
      />
      {/* <ServiceComparison /> */}
      <CardsComponent />
      <About />
      {/* <ContactComponent /> */}
      <Testimonials />
      <OrderForm />
      <AboveFooter />
    </div>
  );
}
