import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header";
import WhatsAppButton from "@/components/whatsappbutton";
import OfferDialog from "@/components/offersdialogue";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Swabi Laundry",
  description: "Best Laundry Service in UAE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        <div className="fixed-navbar">
          <Navbar />
          <WhatsAppButton />
          <OfferDialog 
            googleMapsUrl="https://maps.app.goo.gl/owFNrAMn1L1z8WJHA"
            locationName="Swabi Laundry and Dry Cleaning Service"
          />
        </div>
        <div className={inter.className}>{children}</div>
        <GoogleAnalytics gaId="GTM-M2474PBS" />
      </body>
    </html>
  );
}
