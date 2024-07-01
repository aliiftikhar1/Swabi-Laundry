
import AboveFooter from "@/components/abovefooter";
import React from "react";
import OffersTag from "./components/tag";
import Offerscards from "./components/offerscards";
export const metadata = {
    title: "Swabi Laundry | Offers",
    description: "Offers Page of Swabi Laundry",
  };

export default function Home() {
    return (
        <>
            <OffersTag />
            <div className="container mx-auto px-10 ">
                <div>
                <h1 className="text-center text-4xl font-bold pt-10">Current Offers</h1>
                <p className="text-center text-lg weight-thin w-[1200px] mx-auto py-10">
                Let our experienced team handle your laundry needs with care and expertise. We offer top-quality laundry services to ensure your clothes come out fresh, clean, and ready to wear.
                </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Offerscards
                        price="AED 52"
                        unit="5Kg 52 AED"
                        description="WASH, TUMBLE DRY AND FOLD"
                        imageSrc="/propimg3.jpg" // replace with your image path
                        ctaText="Book Now"
                    />
                    <Offerscards
                        price="30% OFF"
                        unit="Minimum 10 Meter"
                        description="CARPET CLEANING"
                        imageSrc="/propimg4.png" // replace with your image path
                        ctaText="Book Now"
                    />
                    <Offerscards
                        price="AED 12"
                        unit="Per Kg 12 AED"
                        description="PER KG WASH AND FOLD"
                        imageSrc="/propimg2.jpg" // replace with your image path
                        ctaText="Book Now"
                    />
                    <Offerscards
                        price="AED 6"
                        unit="Per Kg 6 AED"
                        description="PER KG WASH"
                        imageSrc="/laundry-service.jpg" // replace with your image path
                        ctaText="Book Now"
                    />
                    {/* 2nd row */}
                    <Offerscards
                        price="AED 75"
                        unit="5Kg 75 AED"
                        description="WASH, DRY AND PRESS"
                        imageSrc="/washdrypress.webp" // replace with your image path
                        ctaText="Book Now"
                    />
                    <Offerscards
                        price="40% OFF"
                        unit="Minimum 15 Meter"
                        description="UPHOLSTERY CLEANING"
                        imageSrc="/propimg4.png" // replace with your image path
                        ctaText="Book Now"
                    />
                    <Offerscards
                        price="AED 20"
                        unit="Per Kg 20 AED"
                        description="DRY CLEANING"
                        imageSrc="/propimg2.jpg" // replace with your image path
                        ctaText="Book Now"
                    />
                    <Offerscards
                        price="AED 10"
                        unit="Per Kg 10 AED"
                        description="IRONING ONLY"
                        imageSrc="/laundry-service.jpg" // replace with your image path
                        ctaText="Book Now"
                    />
                </div>
            </div>
            <br></br>
            <AboveFooter />
        </>
    )
}
