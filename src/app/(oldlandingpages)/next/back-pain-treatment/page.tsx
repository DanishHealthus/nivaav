import BackPainEdw from '@/sections/BackPainEDW/BackPainEdw';
import { Suspense } from 'react';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Best Back Pain Doctor In Delhi NCR',
  description:
    'Get relief from back pain & avoid back surgery with the best doctors in Delhi NCR. Expert diagnosis and effective treatment for all types of back pain. Consult now for lasting solutions!',
  keywords: [
    'Back pain treatment in Delhi NCR',
    'Best back pain doctor Delhi NCR',
    'Lower back pain specialist',
    'Back pain relief Delhi',
    'Spine pain treatment Delhi NCR',
    'spine specialist',
    'back surgery',
    'spinal hospital',
  ],
};

const page = () => {
  return (
    <>
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
    <Suspense>
      <BackPainEdw pathName="/next/back-pain-treatment" />
    </Suspense>
    </>
  );
};

export default page;
