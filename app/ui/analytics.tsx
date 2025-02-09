import Script from 'next/script';
import React from 'react';

const Analytics = () => {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-RPG1ZXC120`}
      ></Script>
      <Script id="google-analytics">
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

export default Analytics;
