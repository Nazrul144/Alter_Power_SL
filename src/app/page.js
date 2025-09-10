export const dynamic = "force-dynamic";
import HomePage from "@/components/HomePage/HomePage";



// SEO metadata

export const metadata = {
  title: "Alternate Power Solutions | Cape Town Electrical, Solar & Property Experts",
  description: "APS delivers expert electrical installations, solar solutions, plumbing, waterproofing, carpentry, and 24/7 emergency services for homes and businesses in Cape Town and the Western Cape.",
  keywords: "electrical services Cape Town, solar installations, property maintenance, plumbing, waterproofing, carpentry, emergency electrical services, commercial electrical contractor, residential electrician, APS Cape Town",
  openGraph: {
    title: "Alternate Power Solutions | Cape Town Electrical, Solar & Property Experts",
    description: "Expert electrical, solar, plumbing, waterproofing & property maintenance solutions for homes and businesses in Cape Town.",
    type: "website",
    url: "https://yourwebsite.com", // replace with your actual domain
    locale: "en_ZA",
    siteName: "Alternate Power Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alternate Power Solutions | Cape Town Experts",
    description: "Electrical, solar, plumbing & property maintenance solutions in Cape Town.",
    creator: "@yourtwitterhandle", // replace with your Twitter handle
  },
  alternates: {
    canonical: "https://yourwebsite.com", // replace with your actual domain
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
    google: "your-google-verification-code", // replace with your code
    yandex: "your-yandex-verification-code", // replace with your code
    yahoo: "your-yahoo-verification-code",   // replace with your code
  },
}





export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
