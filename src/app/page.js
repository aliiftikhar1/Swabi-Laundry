// pages/index.js


'use client'
import About from "@/components/about";
import AboveFooter from "@/components/abovefooter";
import Benefits from "@/components/Benefits";
import Navbar from "@/components/Header";
import Hero from "@/components/Herosection";
import LaundryServices from "@/components/laundryservices";
import OfferDialog from "@/components/offersdialogue";
import OrderForm from "@/components/orderform";
import Productpropcomponent from "@/components/productprop";
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
      <Testimonials />
      <OrderForm />
      <About />
      <AboveFooter />
    </div>
  );
}
