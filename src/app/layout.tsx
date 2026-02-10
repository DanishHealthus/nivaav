import type { Metadata } from "next";
import { Rubik, Montserrat } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { VWOScript } from 'vwo-smartcode-nextjs';
import Template from "./template";
import "./globals.css";
import Script from "next/script";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nivaancare - India & Most Advanced Non-Surgical Pain Treatment Clinics",
  description: "At Nivaan, our integrated approach to treating pain is clinically proven to be 9.3X* more effective than any other pain treatment in the country. We have over 24 advanced non-surgical procedures, with up to 100% insurance coverage.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <VWOScript accountId="1147532" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <GoogleTagManager gtmId="GTM-MZ7ZLG9" />
      </head>
      <body
        className={`${rubik.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '722987299442008');
            fbq('track', 'PageView');
          `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=722987299442008&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
        <Template>{children}</Template>
      </body>
    </html>
  );
}
