import AboveFooter from "@/components/abovefooter";
import Navbar from "@/components/Header";
import React from "react";
import FAQTag from "./components/faqtag";
import FAQSection from "../pricing/components/FAQsection";
import FAQ from "./components/Faqsection";

export const metadata = {
    title: "FAQs | Swabi Laundry",
    description: "FAQ Page of Swabi Laundry",
};

export default function Home() {
    return (
        <>
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content="laundry, FAQ, Swabi Laundry, laundry services, dry cleaning, washing, clothing care" />
                <meta name="author" content="Swabi Laundry" />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.swabilaundry.com/faqs" />
                <meta property="og:image" content="https://www.swabilaundry.com/images/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.description} />
                <meta name="twitter:image" content="https://www.swabilaundry.com/images/twitter-image.jpg" />
            </head>
            <FAQTag />
            <FAQ />
            <br></br>
            <AboveFooter />
        </>
    );
}
