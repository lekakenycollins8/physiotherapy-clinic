import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | MotionWorks Physiotherapy Clinic",
  description:
    "Explore our comprehensive range of physiotherapy services designed to help you recover, strengthen, and thrive.",
  openGraph: {
    title: "Our Services | MotionWorks Physiotherapy Clinic",
    description:
      "Discover how our tailored physiotherapy programs can help you achieve optimal recovery and performance.",
    url: "https://www.motionworksphysioclinic.com/services", // Update with your actual URL
    siteName: "MotionWorks Physiotherapy Clinic",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://x.com/MotionworksP?t=-mzwmz8IpMUh2vCuO0BBaA&s=09", // Update with your Twitter handle if available
    title: "Our Services | MotionWorks Physiotherapy Clinic",
    description:
      "Discover our tailored physiotherapy services designed for optimal recovery and performance.",
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