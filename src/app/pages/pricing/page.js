import React from "react";
import FAQSection from "./components/FAQsection";
import PricingSection from "./components/pricingseciton";
import AboveFooter from "@/components/abovefooter";
export const metadata = {
  title: "Swabi Laundry | Pricing",
  description: "Pricing page of swabi laundry",
};

export default function Home() {
  return (
    <>
      {/* <Tag /> */}
      <PricingSection/>
      <FAQSection/>
      <AboveFooter/>
      
      
    </>
  );
}
