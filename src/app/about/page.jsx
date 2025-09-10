
import About from '@/components/HomePage/About';
import Link from 'next/link';
import React from 'react';




/* metadata for SEO */
export const metadata = {
  title: "About APS | Alternate Power Solutions in Cape Town",
  description: "Learn about APS, a trusted Cape Town-based provider offering comprehensive electrical, solar, and property maintenance solutions. Serving residential and commercial clients across the Western Cape.",
  keywords: "APS Cape Town, electrical services, solar solutions, property maintenance, Western Cape electrical contractor, Cape Town solar installation",
  openGraph: {
    title: "About APS | Alternate Power Solutions in Cape Town",
    description: "Learn about APS, a trusted Cape Town-based provider offering comprehensive electrical, solar, and property maintenance solutions.",
    type: "website",
    url: "https://yourwebsite.com/about", // replace website url after hosting
    images: [
      {
        url: "/images/aps-about-banner.jpg", // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: "APS Cape Town Services",
      },
    ],
    locale: "en_ZA",
    siteName: "Alternate Power Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "About APS | Alternate Power Solutions in Cape Town",
    description: "Professional electrical, solar & maintenance solutions in Cape Town",
    images: ["/images/aps-about-banner.jpg"], // Replace with your actual image path
  },
  alternates: {
    canonical: "https://yourwebsite.com/about", // replace website url after hosting
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}




const AboutPage = () => {
    return (
        <div>
            <About />
            <div className='bg-[#f8b259] px-2 mt-10 lg:px-32 py-32'>
                <h1 className='text-center text-4xl text-white font-bold'>Do you have any issue?</h1>
                <p className='text-center text-white mt-2'>We believe in client satisfaction and we deliver service that can successfully meet or exceed the prospects of the stakeholders.</p>
                <div className='mx-auto text-center text-white border-[1px] rounded-lg lg:w-32 p-2 mt-8'>
                    <Link href={'/contact'}>Contact Us</Link>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
