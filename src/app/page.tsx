import Header from "./components/Header"
import Feature from "./components/Feature"
import Stats  from './components/Stats';
import CTA from './components/CTA';
import QuickLinks from './components/QuickLinks';
import { Metadata } from "next";
import { SEO, SCHOOL_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SEO.DEFAULT_TITLE,
    description: SEO.DEFAULT_DESCRIPTION,
    url: SEO.CANONICAL_URL,
    type: SEO.OG_TYPE,
    images: [{ url: SEO.OG_IMAGE }],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header/>
      <Feature/>
      <Stats/>
      <CTA/>
      <QuickLinks/>
    </div>
  );
}
