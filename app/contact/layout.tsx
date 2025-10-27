import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book Physiotherapy Session in Nairobi - MotionWorks",
  description:
    "Book your physiotherapy session at MotionWorks Clinic, Nairobi. Located at Princess Park Apartments, along Ngong Road. Call +254 706 143 886. Best physiotherapist in Nairobi, Kenya.",
  keywords: "book physiotherapy Nairobi, physiotherapy appointment Kenya, Princess Park Apartments physiotherapy, Ngong Road physiotherapist, contact physiotherapist Nairobi, physiotherapy booking Kenya",
  openGraph: {
    title: "Contact MotionWorks | Book Best Physiotherapist in Nairobi",
    description:
      "Book your session with Nairobi's best physiotherapist. Princess Park Apartments, Ngong Road. Call +254 706 143 886 for immediate booking.",
    url: "https://www.motionworksphysioclinic.com/contact",
    siteName: "MotionWorks Physiotherapy Clinic - Best Physiotherapist in Nairobi",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://x.com/MotionworksP?t=-mzwmz8IpMUh2vCuO0BBaA&s=09",
    title: "Contact MotionWorks | Physiotherapy Nairobi",
    description:
      "Book your physiotherapy session in Nairobi. Princess Park Apartments, Ngong Road. +254 706 143 886",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <section>{children}</section>
    </main>
  );
}
