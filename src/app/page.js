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
  title: "Home | Swabi Laundry ",
  description: "Home Page of Swabi Laundry - Professional laundry services in your area. Book online for convenient and reliable service.",
  keywords: "Swabi Laundry, laundry services, dry cleaning, ironing, home laundry service, online laundry booking",
  author: "Swabi Laundry",
  openGraph: {
    title: "Home | Swabi Laundry",
    description: "Professional laundry services in your area. Book online for convenient and reliable service.",
    url: "https://www.swabilaundry.com",
    type: "website",
    images: [
      {
        url: "https://www.swabilaundry.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Swabi Laundry",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="w-full">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <title>{metadata.title}</title>
      </head>
      <Hero />
      <LaundryServices />
      <Benefits />
      <Productpropcomponent
        benefit="Swabi Laundry"
        image="/propimg4.png"
        title="Your trusted partner for clean and fresh laundry"
        description1="Never stress over dirty clothes again. At Swabi Laundry, we provide top-notch laundry, dry cleaning, and ironing services tailored to fit your busy schedule. Enjoy the convenience of fresh and clean laundry delivered straight to your doorstep."
        align="left"
      />
      <Testimonials />
      {/* <About /> */}
      <OrderForm />
      <AboveFooter />
    </div>
  );
}
