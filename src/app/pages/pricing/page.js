'use client'
import Hero from "@/components/Herosection";
import React from "react";
import Navbar from "@/components/Header";
import Tag from "./components/tag";
import LaundryInfo from "./components/laundryinfo";
import Productpropcomponent from "./components/productprop";
import FAQSection from "./components/FAQsection";
import PricingSection from "./components/pricingseciton";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";
import AboveFooter from "@/components/abovefooter";
import ContactComponent from "@/components/contact";
import Head from "next/head";
export default function Home() {
  return (
    <>
    <Head>
      <title>Swabi Laundry | Home</title>
    </Head>
      <Navbar />
      <Tag />
      <PricingSection/>
      <LaundryInfo />
      <Productpropcomponent
        benefit="Best Laundry Discount"
        image="/laundrydiscount.avif"
        imageWidth="100%"  // Specify the width of the image as 50%
        title="A laundry service designed for you"
        description1="Never worry about staining your favourite shirt. We offer laundry, dry cleaning and ironing at a schedule that fits your lifestyle."
        description2="Best Laundry service provider in Dubai"  // Add empty strings for other descriptions if not used
        description3=""  // Add empty strings for other descriptions if not used
        align="left"
      />
      
      <ContactComponent/>
      <FAQSection/>
      <AboveFooter/>
      
      
    </>
  );
}
