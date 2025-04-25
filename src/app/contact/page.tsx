import Contact from "./contact"
import { Metadata } from "next";
import { SEO, SCHOOL_NAME, SCHOOL_FULL_NAME, SCHOOL_LOCATION, SCHOOL_PHONE, SCHOOL_EMAIL } from "@/lib/constants";
import Script from "next/script";

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
  return (
    <>
      <Contact/>
      <Script id="neetoform-init">
        {`window.neetoForm = window.neetoForm || { embed: function(){(neetoForm.q=neetoForm.q||[]).push(arguments)} };`}
      </Script>
      <Script 
        src="https://honeyconventschool.neetoform.com/javascript/embed.js"
        strategy="afterInteractive"
      />
      <Script id="neetoform-embed" strategy="afterInteractive">
        {`
          neetoForm.embed({
            type: "inline",
            id: "4bce6475-1593-49e7-b399-3d164de773f8",
            organization: "honeyconventschool",
            elementSelector: "#inline-embed-container",
            styles: { 
              height: "100%", 
              width: "100%",
              minHeight: "800px",
              overflow: "visible"
            },
          });
        `}
      </Script>
    </>
  );
} 