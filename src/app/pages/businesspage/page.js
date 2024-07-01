import AboveFooter from "@/components/abovefooter";
import React from "react";
import Businesscomponent from "./components/businessprop";
import Ourservices from "./components/ourservices";
import OrderForm from "@/components/orderform";

export const metadata = {
    title: "Swabi Laundry | Business Page",
    description: "Business Page of Swabi Laundry",
  };
export default function Home(){
    return(
        <>
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