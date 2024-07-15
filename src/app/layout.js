import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header";
import WhatsAppButton from "@/components/whatsappbutton";
import OfferDialog from "@/components/offersdialogue";
import Head from "next/head";

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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GT-WPL9D6WM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GT-WPL9D6WM');
            `,
          }}
        />
      </Head>
      <body>
        <div className="fixed-navbar">
          <Navbar />
          <WhatsAppButton />
          <OfferDialog 
            googleMapsUrl="https://maps.app.goo.gl/owFNrAMn1L1z8WJHA" // Replace with your actual Google Maps URL
            locationName="Swabi Laundry and Dry Cleaning Service"
          />
        </div>
        <div className={inter.className}>{children}</div>
      </body>
    </html>
  );
}
