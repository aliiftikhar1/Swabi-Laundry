// pages/index.js
import AboveFooter from "@/components/abovefooter";
import React from "react";
import Businesscomponent from "./components/businessprop";
import Ourservices from "./components/ourservices";
import OrderForm from "@/components/orderform";
import PricingTable from "./components/pricingtable";
import PricingLayout from "./components/pricingtbcomponent";
import BusinessTag from "./components/businesstag";

export const metadata = {
    title: "Business Page | Swabi Laundry",
    description: "Business Page of Swabi Laundry",
};

export default function Home() {
    return (
        <div className="mt-20">
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
            <BusinessTag/>
            <h1 className="text-6xl text-center font-bold my-10 pt-10">Our Services</h1>
            <Businesscomponent
                image="/businesspage/laurndryuniform.jpg" // Update this path to the correct image if needed
                name="Laundry for uniforms"
                label="Uniforms Laundry Service"
                description="We process hundreds of thousands of items each week, so you can rely on our commercial laundry service for your uniforms no matter the size of your organisation."
                align="left"
            />
            <Businesscomponent
                image="/businesspage/airbnb.webp"
                name="Laundry for Airbnb"
                label="Airbnb Laundry Service"
                description="Our on-demand service provides clean laundry for your Airbnb exactly when you need it. We can wash your own items or rent our clean linen and towels to you on-demand. Now you can focus on providing the best experience to your guests."
                align="right"
            />
            <Businesscomponent
                image="/businesspage/hotel.jpg"
                name="Laundry for your hotel"
                label="Hotel Laundry Service"
                description="Partner with us and offer great laundry service to your guests. If you are a hotel, service apartments or an Airbnb host, we offer overnight laundry and dry cleaning service to your guests, while you can earn a commission."
                align="left"
            />
            <Businesscomponent
                image="/businesspage/cafeandresturants.avif"
                name="Laundry for cafes and restaurants"
                label="Cafes and Restaurants Laundry Service"
                description="Our cafe and restaurant laundry service offer quick turnaround and excellent cleaning for your business needs. We can work on your own schedule and deliver great cleaning for table cloths, uniforms, napkins, kitchen cloths and more."
                align="right"
            />
            <Businesscomponent
                image="/businesspage/office.jpg"
                name="Laundry for your office"
                label="Office Laundry Service"
                description="We provide custom solution to your office laundry and dry cleaning needs. Make our service easily available to your employees, ensure clean towels for your shower facility, or clean your swag after an event."
                align="left"
            />
            <Businesscomponent
                image="/businesspage/business.jpg"
                name="Laundry for your business"
                label="Business Laundry Service"
                description="Focus on the more important parts of your business while we take care of the laundry. It's an ideal solution to hairdressers, beauty and spa saloons or anyone that needs laundry done."
                align="right"
            />
            
            <br />
            <AboveFooter />
        </div>
    );
}
