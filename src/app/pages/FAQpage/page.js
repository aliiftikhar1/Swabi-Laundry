'use client'

import AboveFooter from "@/components/abovefooter";
import Navbar from "@/components/Header";
import React from "react";
import FAQTag from "./components/faqtag";
import FAQSection from "../pricing/components/FAQsection";
import FAQ from "./components/Faqsection";

export default function Home(){

    return(
        <>
        <Navbar/>
        <FAQTag/>
        <FAQ/>
        <br></br>
        <AboveFooter/>
        </>
    )
}