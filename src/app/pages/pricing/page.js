import React from "react";
import FAQSection from "./components/FAQsection";
import PricingSection from "./components/pricingseciton";
import AboveFooter from "@/components/abovefooter";
import Tag from "./components/tag";
import PricingTag from "./components/tag2";

export const metadata = {
  title: "Pricing | Swabi Laundry",
  description: "Discover the competitive pricing of Swabi Laundry for all your laundry, dry cleaning, and ironing needs. Affordable and reliable services to fit your budget.",
  keywords: "Swabi Laundry pricing, laundry pricing, dry cleaning pricing, ironing pricing, affordable laundry services",
  author: "Swabi Laundry",
  openGraph: {
    title: "Pricing | Swabi Laundry",
    description: "Discover the competitive pricing of Swabi Laundry for all your laundry, dry cleaning, and ironing needs. Affordable and reliable services to fit your budget.",
    url: "https://www.swabilaundry.com/pricing",
    type: "website",
    images: [
      {
        url: "https://www.swabilaundry.com/og-image-pricing.jpg",
        width: 800,
        height: 600,
        alt: "Swabi Laundry Pricing",
      },
    ],
  },
};

export default function Pricing() {
  return (
    <>
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <title>{metadata.title}</title>
      </head>
      <PricingTag/>
      <PricingSection />
      <FAQSection />
      <AboveFooter />
    </>
  );
}
