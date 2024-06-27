'use client'
import Navbar from "@/components/Header";
import Productpropcomponent from "./components/productprop";
import Quote from "./components/quote";
import React from "react";
import ChoresComponent from "./components/chorecomponent";
import AboveFooter from "@/components/abovefooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{marginTop:'150px'}}>
      <Productpropcomponent 
        image="/propimg2.jpg" // Update this path to where your image is stored
        name="Our Services"
        title="Convenient and Reliable Laundry & Dry Cleaning Services"
        description1="At Laundryheap, we offer a range of laundry and dry cleaning services tailored to meet your needs. Whether it's everyday clothing, delicate items, or specialized fabrics, we handle it all."
        description2="We use state-of-the-art technology and eco-friendly detergents to ensure your garments are cleaned with care and efficiency."
        align="right"
      /></div>
      <Productpropcomponent
        image="/propimg3.jpg" // Update this path to where your image is stored
        name="Our Story"
        title="Established to Revolutionize Laundry Services Worldwide"
        description1="Laundryheap started in London in 2014 with a vision to transform the laundry and dry cleaning industry."
        description2="Since then, we have expanded to 13 countries, providing our services with a commitment to quality and customer satisfaction."
        description3="We are dedicated to environmental sustainability, employing electric delivery vehicles and reducing our carbon footprint."
        align="left"
      />
      <Quote/>
      <Productpropcomponent
        image="/propimg4.png" // Update this path to where your image is stored
        imageWidth="600px"
        name="Our Commitment"
        title="Partnering with Local Cleaners for Superior Quality"
        description1="Quality is our priority. We partner with local cleaning facilities that uphold the highest standards in garment care."
        align="left"
      />
      <ChoresComponent/>
      <AboveFooter/>
    </>
  );
}
