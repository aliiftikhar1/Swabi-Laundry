// pages/offers.js
import AboveFooter from "@/components/abovefooter";
import React from "react";
import OffersTag from "./components/tag";
import Offerscards from "./components/offerscards";

export const metadata = {
  title: "Offers | Swabi Laundry",
  description: "Discover the latest offers and discounts on laundry services at Swabi Laundry. Enjoy top-quality service at affordable prices.",
  keywords: "Swabi Laundry offers, laundry discounts, laundry service deals, affordable laundry services, laundry promotions",
  author: "Swabi Laundry",
  openGraph: {
    title: "Offers | Swabi Laundry",
    description: "Discover the latest offers and discounts on laundry services at Swabi Laundry. Enjoy top-quality service at affordable prices.",
    url: "https://www.swabilaundry.com/offers",
    type: "website",
    images: [
      {
        url: "https://www.swabilaundry.com/og-image-offers.jpg",
        width: 800,
        height: 600,
        alt: "Swabi Laundry Offers",
      },
    ],
  },
};

export default function Offers() {
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
      <OffersTag />
      <div className="container mx-auto px-10">
        <div>
          <h1 className="text-center text-4xl font-bold pt-10">Current Offers</h1>
          <p className="text-center text-lg weight-thin md:w-[1200px] mx-auto py-10">
            Let our experienced team handle your laundry needs with care and expertise. We offer top-quality laundry services to ensure your clothes come out fresh, clean, and ready to wear. Check out our current offers and enjoy premium laundry services at discounted rates.
          </p>
        </div>
        <div className="grid md:grid-cols-3 md:gap-20 gap-10 md:px-40 ">
          <Offerscards imageSrc="/offers/offer (1).jpg" />
          <Offerscards imageSrc="/offers/offer (2).jpg" />
          <Offerscards imageSrc="/offers/offer (3).jpg" />
          <Offerscards imageSrc="/offers/offer (4).jpg" />
          <Offerscards imageSrc="/offers/offer (5).jpg" />
          <Offerscards imageSrc="/offers/offer (6).jpg" />
        </div>
      </div>
      <br />
      <AboveFooter />
    </>
  );
}
