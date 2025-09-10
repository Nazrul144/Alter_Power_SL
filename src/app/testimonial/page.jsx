import Testimonial from '@/components/HomePage/Testimonial';
import React from 'react';

export const metadata = {
  title: "Testimonials | APS Cape Town | Client Reviews & Success Stories",
  description: "Read real client testimonials and reviews about APS's electrical, solar, plumbing, and property maintenance services in Cape Town. Discover why customers trust Alternate Power Solutions.",
  keywords: "APS testimonials, client reviews, customer feedback, Cape Town electrical services, solar solutions, plumbing, property maintenance, APS success stories",
  openGraph: {
    title: "Testimonials | APS Cape Town | Client Reviews & Success Stories",
    description: "See what clients say about APS's electrical, solar, plumbing, and property maintenance services in Cape Town.",
    type: "website",
    url: "https://yourwebsite.com/testimonial", // replace with your actual URL
    siteName: "Alternate Power Solutions",
  },
  twitter: {
    card: "summary",
    title: "APS Testimonials | Cape Town Client Reviews",
    description: "Read real reviews and feedback from APS clients in Cape Town.",
  },
  alternates: {
    canonical: "https://yourwebsite.com/testimonial", // replace with your actual URL
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

const TestimonialPage = () => {
    return (
        <div>
            <Testimonial/>
        </div>
    );
}

export default TestimonialPage;
