// pages/index.js
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

export const metadata = {
  title: "Swabi Laundry | Home",
  description: "Home Page of Swabi Laundry",
};

export default function Home() {
  return (
    <div className="w-full">  
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
