import HomePage from '@/components/HomePage/HomePage';
import React from 'react';

export const metadata = {
  title: "Home | Alternate Power Solutions in Cape Town | APS",
  description: "APS offers expert electrical installations, solar solutions, waterproofing, plumbing, carpentry, and 24/7 emergency call-outs. Trusted property services for commercial clients in Cape Town.",
  keywords: "electrical services Cape Town, solar installations, property maintenance, emergency electrical services, commercial electrical contractor, residential electrician, Western Cape",
  openGraph: {
    title: "Home | Alternate Power Solutions in Cape Town | APS",
    description: "Expert electrical, solar & property maintenance solutions in Cape Town",
    type: "website",
    url: "https://yourwebsite.com", // replace after hosting
    images: [
      {
        url: "/images/aps-home-banner.jpg",
        width: 1200,
        height: 630,
        alt: "APS Cape Town Electrical Services",
      },
    ],
    locale: "en_ZA",
    siteName: "Alternate Power Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Alternate Power Solutions Cape Town",
    description: "Expert electrical, solar & property maintenance solutions",
    images: ["/images/aps-home-banner.jpg"],
    creator: "@yourtwitterhandle",
  },
  alternates: {
    canonical: "https://yourwebsite.com", // replace after hosting
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}



const Page = () => {
    return (
        <div>
            <HomePage />
        </div>
    );
}

export default Page;
