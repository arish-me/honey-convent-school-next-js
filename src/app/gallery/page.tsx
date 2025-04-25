import { Metadata } from "next";
import { SEO, SCHOOL_NAME } from "@/lib/constants";
import GalleryContent from "./gallery-content";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Explore photos from ${SCHOOL_NAME} showcasing our campus, events, student activities, and academic life.`,
  keywords: SEO.KEYWORDS.GALLERY,
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: `Photo Gallery | ${SCHOOL_NAME}`,
    description: `Explore photos from ${SCHOOL_NAME} showcasing our campus, events, student activities, and academic life.`,
    url: `${SEO.CANONICAL_URL}/gallery`,
    type: SEO.OG_TYPE,
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
} 