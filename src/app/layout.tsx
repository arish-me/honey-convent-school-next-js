import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header/Header"
import Footer from "./footer/Footer"
import { SEO, SCHOOL_NAME } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: SEO.DEFAULT_TITLE,
    template: `%s | ${SCHOOL_NAME}`,
  },
  description: SEO.DEFAULT_DESCRIPTION,
  keywords: SEO.KEYWORDS.HOME,
  metadataBase: new URL(SEO.CANONICAL_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: SEO.OG_TYPE,
    title: SEO.DEFAULT_TITLE,
    description: SEO.DEFAULT_DESCRIPTION,
    siteName: SEO.SITE_NAME,
    url: SEO.CANONICAL_URL,
    images: [{
      url: SEO.OG_IMAGE,
      width: 1200,
      height: 630,
      alt: SCHOOL_NAME,
    }],
  },
  twitter: {
    card: SEO.TWITTER_CARD,
    title: SEO.DEFAULT_TITLE,
    description: SEO.DEFAULT_DESCRIPTION,
    images: [SEO.OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex min-h-screen flex-col bg-background antialiased`}>
        <Header/>
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
