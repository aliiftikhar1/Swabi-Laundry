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
      {/* <Tag /> */}
      <PricingSection/>
      <FAQSection/>
      <AboveFooter/>
      
      
    </>
  );
}
