import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Best Physiotherapist in Nairobi - MotionWorks",
  description:
    "Meet Brian Ochieng, lead physiotherapist with 10+ years experience at MotionWorks Physiotherapy Clinic. Located at Princess Park Apartments, Ngong Road, Nairobi. Expert physiotherapy care in Kenya.",
  keywords: "best physiotherapist Nairobi, expert physiotherapist Kenya, Brian Ochieng physiotherapist, Princess Park physiotherapy, Ngong Road physiotherapist, certified physiotherapist Nairobi, experienced physiotherapist Kenya",
  openGraph: {
    title: "About MotionWorks | Best Physiotherapist in Nairobi, Kenya",
    description:
      "Meet our expert team led by Brian Ochieng, a senior physiotherapist with over 10 years of experience. Princess Park Apartments, Ngong Road, Nairobi.",
    url: "https://www.motionworksphysioclinic.com/about",
    siteName: "MotionWorks Physiotherapy Clinic",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://x.com/MotionworksP?t=-mzwmz8IpMUh2vCuO0BBaA&s=09",
    title: "About MotionWorks | Best Physiotherapist in Nairobi",
    description:
      "Expert physiotherapy team in Nairobi, Kenya. 10+ years experience. Princess Park Apartments, Ngong Road.",
  },
};

export default function AboutLayout({
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
