import Navbar from "@/components/Header";
import Productpropcomponent from "./components/productprop";
import Quote from "./components/quote";
import React from "react";
import ChoresComponent from "./components/chorecomponent";
import AboveFooter from "@/components/abovefooter";

export const metadata = {
  title: "About Us | Swabi Laundry",
  description: "About Us Page of Swabi Laundry",
};

export default function Home() {
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Your Business, services, dry cleaning, about us, garment care, eco-friendly, laundry in City" />
        <meta name="author" content="Your Business" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourbusiness.com/about-us" />
        <meta property="og:image" content="https://www.yourbusiness.com/images/og-about-us.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://www.yourbusiness.com/images/twitter-about-us.jpg" />
      </head>
      <div style={{ marginTop: '150px' }}>
        <Productpropcomponent 
          image="/propimg4.png"
          name="Our Services"
          title="Convenient and Reliable Services"
          description1="At Your Business, we offer a range of services tailored to meet your needs. Whether it's everyday tasks, specialized services, or unique requests, we handle it all."
          description2="We use state-of-the-art technology and eco-friendly practices to ensure your needs are met with care and efficiency."
          align="right"
        />
      </div>
      <Productpropcomponent
        image="/propimg2.jpg"
        name="Our Story"
        title="Established to Revolutionize Services Worldwide"
        description1="Your Business started in City in 20XX with a vision to transform the industry."
        description2="Since then, we have expanded to several locations, providing our services with a commitment to quality and customer satisfaction."
        description3="We are dedicated to environmental sustainability, employing eco-friendly practices and reducing our carbon footprint."
        align="left"
      />
      <Quote/>
      <Productpropcomponent
        image="/propimg3.jpg"
        imageWidth="600px"
        name="Our Commitment"
        title="Partnering with Local Experts for Superior Quality"
        description1="Quality is our priority. We partner with local facilities that uphold the highest standards in service."
        align="left"
      />
      <ChoresComponent/>
      <AboveFooter/>
    </>
  );
}
