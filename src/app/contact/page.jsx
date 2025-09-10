import Contact from '@/components/Contact';
import React from 'react';


// SEO meta data
export const metadata = {
  title: "Contact APS | Alternate Power Solutions in Cape Town",
  description: "Get in touch with APS for expert electrical, solar, plumbing, and maintenance services in Cape Town. Reach us via phone, WhatsApp, or contact form for quick, reliable support.",
  keywords: "contact APS, electrical services Cape Town, solar solutions, plumbing, property maintenance, WhatsApp, phone, Cape Town support",
  openGraph: {
    title: "Contact APS | Alternate Power Solutions in Cape Town",
    description: "Contact APS for professional electrical, solar, plumbing, and maintenance services in Cape Town.",
    type: "website",
    url: "https://yourwebsite.com/contact", // replace with your actual URL
    siteName: "Alternate Power Solutions",
  },
  twitter: {
    card: "summary",
    title: "Contact APS | Cape Town Electrical & Solar Experts",
    description: "Reach out to APS for reliable electrical, solar, and maintenance services in Cape Town.",
  },
  alternates: {
    canonical: "https://yourwebsite.com/contact", // replace with your actual URL
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


const ContactPage = () => {
    return (
        <div>
            <Contact />
        </div>
    );
}

export default ContactPage;
