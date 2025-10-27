import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physiotherapy Services in Nairobi | Best Physiotherapist Kenya - MotionWorks",
  description:
    "Comprehensive physiotherapy services in Nairobi: Sports injury rehabilitation, orthopedic therapy, neurological physiotherapy, pain management. Expert care at Princess Park Apartments, Ngong Road. 10+ years experience.",
  keywords: "physiotherapy services Nairobi, sports injury rehabilitation Kenya, orthopedic physiotherapy Nairobi, neurological therapy Kenya, pain management Nairobi, best physiotherapy clinic Kenya, Princess Park physiotherapy",
  openGraph: {
    title: "Physiotherapy Services in Nairobi | MotionWorks Clinic",
    description:
      "Expert physiotherapy services in Nairobi, Kenya. Sports rehabilitation, orthopedic care, neurological therapy. Princess Park Apartments, Ngong Road.",
    url: "https://www.motionworksphysioclinic.com/services",
    siteName: "MotionWorks Physiotherapy Clinic",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://x.com/MotionworksP?t=-mzwmz8IpMUh2vCuO0BBaA&s=09",
    title: "Physiotherapy Services Nairobi | MotionWorks",
    description:
      "Comprehensive physiotherapy services in Nairobi, Kenya. Expert care for sports injuries, pain management, and rehabilitation.",
  },
};

export default function ServicesLayout({
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