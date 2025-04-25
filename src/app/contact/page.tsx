import Contact from "./contact"

import { Metadata } from "next";
import { SEO, SCHOOL_NAME, SCHOOL_FULL_NAME, SCHOOL_LOCATION, SCHOOL_PHONE, SCHOOL_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${SCHOOL_NAME}. Find our location, contact details, and reach out to us with your inquiries or schedule a visit to our campus.`,
  keywords: SEO.KEYWORDS.CONTACT,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `Contact Us | ${SCHOOL_NAME}`,
    description: `Get in touch with ${SCHOOL_NAME}. Find our location, contact details, and reach out to us with your inquiries.`,
    url: `${SEO.CANONICAL_URL}/contact`,
    type: SEO.OG_TYPE,
  },
};

export default function ContactPage() {
 return <Contact/>
} 