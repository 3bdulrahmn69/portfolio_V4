'use client';

import Script from 'next/script';
import React, { useEffect, useState } from 'react';

const GoogleAnalytics = () => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Delay loading GA by 2 seconds to prioritize page content
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-RPG1ZXC120`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-RPG1ZXC120');
            `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
