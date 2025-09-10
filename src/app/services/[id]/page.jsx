import ServiceDetails from '@/components/ServiceDetails'
import React from 'react'


// meta data for seo
export const metadata = {
  title: "Service Details | Alternate Power Solutions in Cape Town | APS",
  description: "APS offers professional electrical installation and maintenance services for commercial and residential properties in Cape Town. Contact us for safe, efficient, and 24/7 emergency electrical support.",
  keywords: "service details, electrical installation, electrical maintenance, emergency electrical services, solar solutions, plumbing, property maintenance, Cape Town, APS",
  openGraph: {
    title: "Service Details | Alternate Power Solutions in Cape Town | APS",
    description: "Learn more about APS's expert electrical, solar, plumbing, and property maintenance services in Cape Town.",
    type: "article",
    url: "https://yourwebsite.com/services/[id]", // replace with your actual URL
    siteName: "Alternate Power Solutions",
  },
  twitter: {
    card: "summary",
    title: "APS Service Details | Cape Town Electrical & Solar Experts",
    description: "Discover APS's professional electrical, solar, and maintenance services in Cape Town.",
  },
  alternates: {
    canonical: "https://yourwebsite.com/services/[id]", // replace with your actual URL
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


const PageDetails = () => {
  return (
    <div>
      <ServiceDetails />
    </div>
  )
}

export default PageDetails