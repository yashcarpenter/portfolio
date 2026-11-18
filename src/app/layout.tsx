import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Background from "@/components/motion/Background";
import MotionEffects from "@/components/motion/MotionEffects";
import SmoothScroll from "@/components/motion/SmoothScroll";
import CustomCursor from "@/components/motion/CustomCursor";
import RouteTransition from "@/components/motion/RouteTransition";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const defaultTitle = `${site.name} · ${site.role}`;

/** Site-wide defaults. Each page overrides title/description/canonical via `pageMetadata()`. */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultTitle, template: `%s · ${site.name}` },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    url: "/",
    title: defaultTitle,
    description: site.description,
  },
  twitter: { card: "summary", title: defaultTitle, description: site.description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06060a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <Background />
        <SmoothScroll />
        <MotionEffects />
        <CustomCursor />
        <RouteTransition>
          <Header />
          <main id="main" className="relative">
            {children}
          </main>
          <Footer />
        </RouteTransition>
      </body>
    </html>
  );
}
