import Blog from '@/components/Blog';
import React from 'react';


// metadata for SEO
export const metadata = {
  title: "APS Blog | Power Solutions, Solar, Electrical & Maintenance Tips",
  description: "Explore expert articles, tips, and guides on solar power, electrical systems, property maintenance, and renewable energy solutions in Cape Town. Stay updated with APS insights.",
  keywords: "APS blog, solar tips, electrical guides, property maintenance, renewable energy, Cape Town, power solutions, energy efficiency",
  openGraph: {
    title: "APS Blog | Power Solutions, Solar, Electrical & Maintenance Tips",
    description: "Expert articles and guides on solar, electrical, and property maintenance solutions in Cape Town.",
    type: "website",
    url: "https://yourwebsite.com/blog", // replace with your actual URL
    siteName: "Alternate Power Solutions",
  },
  twitter: {
    card: "summary",
    title: "APS Blog | Power Solutions & Maintenance Tips",
    description: "Read expert tips and guides on solar, electrical, and property maintenance.",
  },
  alternates: {
    canonical: "https://yourwebsite.com/blog", // replace with your actual URL
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

const BlogPage = () => {
    return (
        <div>
           <Blog/>
        </div>
    );
}

export default BlogPage;
