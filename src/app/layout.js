import { Geist, Geist_Mono, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/providers/theme-provider";
import { WhatsApp } from "@/providers/what'sappProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Roboto
const roboto = Roboto({
  variable: "--font-roboto", // Define a CSS variable for Roboto
  weight: ["100", "300", "400", "500", "700", "900"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets you need
});

export const metadata = {
  title: {
    default: "Alternate Power Solutions | Cape Town Electrical, Solar & Property Experts",
    template: "%s | Alternate Power Solutions",
  },
  description: "Alternate Power Solutions provides expert electrical, solar, plumbing, waterproofing, and property maintenance services for commercial and residential clients in Cape Town and the Western Cape.",
  keywords: "Alternate Power Solutions, electrical services Cape Town, solar installations, property maintenance, plumbing, waterproofing, commercial services, residential services, APS Cape Town",
  openGraph: {
    title: "Alternate Power Solutions | Cape Town Electrical, Solar & Property Experts",
    description: "Expert electrical, solar, plumbing, waterproofing & property maintenance solutions in Cape Town.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.svg" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <WhatsApp>
          <div>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="antialiased">
                <Navbar />
                <main>{children}</main>
                <Footer />
              </div>
              <ToastContainer position="top-center" />
            </ThemeProvider>
          </div>
        </WhatsApp>
        <ToastContainer />
      </body>
    </html>
  );
}
