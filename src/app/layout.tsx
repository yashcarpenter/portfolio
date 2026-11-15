import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/motion/Background";
import MotionEffects from "./components/motion/MotionEffects";
import SmoothScroll from "./components/motion/SmoothScroll";
import CustomCursor from "./components/motion/CustomCursor";
import { CurtainProvider } from "./components/motion/Curtain";

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

export const metadata: Metadata = {
  title: "Yash Carpenter - Backend Developer",
  description: "Crafting robust, scalable backend solutions that power exceptional digital experiences. Backend developer with 5+ years of experience.",
  keywords: "backend developer, Node.js, Python, API development, microservices, database design",
  authors: [{ name: "Yash Carpenter" }],
  alternates: { canonical: "https://yashcarpenter.dev" },
  openGraph: {
    title: "Yash Carpenter - Backend Developer",
    description: "Crafting robust, scalable backend solutions that power exceptional digital experiences.",
    type: "website",
  },
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
        <CurtainProvider>
          <Header />
          <main id="main" className="relative">
            {children}
          </main>
          <Footer />
        </CurtainProvider>
      </body>
    </html>
  );
}
