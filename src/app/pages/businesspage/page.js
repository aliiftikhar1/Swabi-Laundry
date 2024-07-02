import AboveFooter from "@/components/abovefooter";
import React from "react";
import Businesscomponent from "./components/businessprop";
import Ourservices from "./components/ourservices";
import OrderForm from "@/components/orderform";

export const metadata = {
    title: "Business Page | Swabi Laundry",
    description: "Business Page of Swabi Laundry",
};

export default function Home() {
    return (
        <>
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content="laundry service, business laundry, Swabi Laundry, laundry in Dubai, professional laundry, dry cleaning, washing service, clothing care" />
                <meta name="author" content="Swabi Laundry" />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.swabilaundry.com/business" />
                <meta property="og:image" content="https://www.swabilaundry.com/images/og-business.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.description} />
                <meta name="twitter:image" content="https://www.swabilaundry.com/images/twitter-business.jpg" />
            </head>
            <Businesscomponent
  image="/propimg3.jpg" // Update this path to the correct image if needed
  name="Swabi Laundry - Your Trusted Laundry Service"
  label="Service"
  description="At Swabi Laundry, we offer top-notch laundry and dry cleaning services in Dubai. Our expert team ensures your garments are handled with utmost care, using eco-friendly detergents and state-of-the-art technology. Experience convenience and reliability with Swabi Laundry."
  align="left"
/>

            <Ourservices />
            <br></br>
            <AboveFooter />
        </>
    );
}
