'use client'
import AboveFooter from "@/components/abovefooter";
import Navbar from "@/components/Header";
import React from "react";
import Businesscomponent from "./components/businessprop";
import Ourservices from "./components/ourservices";
import OrderForm from "@/components/orderform";


export default function Home(){
    return(
        <>
        <Navbar/>
        <Businesscomponent
        image="/propimg3.jpg"
        name="Laundry Service For You!"
        label="Service"
        description="We provide the best laundry service in dubai."
        align="left"
        />
        <Ourservices/>
        <OrderForm/>
        <br></br>
        <AboveFooter/>
        </>
    )
}