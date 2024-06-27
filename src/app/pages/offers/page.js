'use client'
import AboveFooter from "@/components/abovefooter";
import Navbar from "@/components/Header";
import React from "react";
import Offers from "./components/offers";

export default function Home(){
    return (
        <><Navbar />
        <Offers/>
        <AboveFooter /></>
    )
}