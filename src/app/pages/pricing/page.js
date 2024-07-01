'use client'
import React from "react";
import Navbar from "@/components/Header";
import FAQSection from "./components/FAQsection";
import PricingSection from "./components/pricingseciton";
import AboveFooter from "@/components/abovefooter";

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
