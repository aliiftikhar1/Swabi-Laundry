import React from "react";
import Businesscomponent from "./businessprop";

export default function Ourservices(){
    return(
        <>
        <div className="w-full h-full justify-center">
            <h1 className="text-6xl text-center font-bold">Our Service</h1>
            <Businesscomponent
        image="/propimg2.jpg"
        name="Laundry Service For You!"
        label="Service"
        description="We provide the best laundry service in dubai."
        align="left"
        />
         <Businesscomponent
        image="/propimg4.png"
        name="Laundry Service For You!"
        label="Service"
        description="We provide the best laundry service in dubai."
        align="right"
        />
        </div>
        </>
    )
}