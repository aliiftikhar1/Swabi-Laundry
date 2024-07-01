
import AboveFooter from "@/components/abovefooter";
import Navbar from "@/components/Header";
import React from "react";
import FAQTag from "./components/faqtag";
import FAQSection from "../pricing/components/FAQsection";
import FAQ from "./components/Faqsection";

export const metadata = {
    title: "Swabi Laundry | FAQs",
    description: "FAQ Page of Swabi Laundry",
  };
export default function Home(){

    return(
        <>
        <FAQTag/>
        <FAQ/>
        <br></br>
        <AboveFooter/>
        </>
    )
}