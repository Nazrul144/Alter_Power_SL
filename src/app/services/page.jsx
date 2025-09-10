
import Services from '@/components/HomePage/Services'

import React from 'react'


// meta data for SEO
export const metadata = {
  title: "Our Services | Complete Turnkey Property Solutions in Cape Town | APS",
  description: "Discover APS's full range of services: electrical installations, solar solutions, waterproofing, plumbing, carpentry, and 24/7 emergency call-outs. Trusted property solutions for commercial and residential clients in Cape Town.",
  keywords: "electrical services Cape Town, solar solutions, waterproofing, plumbing, carpentry, emergency call-outs, property maintenance, commercial services, residential services, APS Cape Town",
  openGraph: {
    title: "Our Services | Complete Turnkey Property Solutions in Cape Town | APS",
    description: "Explore APS's expert electrical, solar, plumbing, waterproofing, and property maintenance services in Cape Town.",
    type: "website",
    url: "https://yourwebsite.com/services", // replace with your actual URL
    siteName: "Alternate Power Solutions",
  },
  twitter: {
    card: "summary",
    title: "APS Services | Electrical, Solar, Plumbing & More",
    description: "See all APS services for property maintenance and energy solutions in Cape Town.",
  },
  alternates: {
    canonical: "https://yourwebsite.com/services", // replace with your actual URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
    },
  },
}

const ServicesPage = () => {
  return (
    <div>
        <Services/>
    </div>
  )
}

export default ServicesPage