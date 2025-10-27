import type { Metadata } from "next";
import services from "@/data/services.json";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found | MotionWorks Physiotherapy",
    };
  }

  // Create SEO-optimized title and description based on service
  const titleMap: { [key: string]: string } = {
    "sports-rehabilitation": "Sports Injury Physiotherapy Nairobi | Sports Rehabilitation Massage - MotionWorks",
    "orthopedic-physiotherapy": "Back Pain Physiotherapy Nairobi | Neck Pain & Joint Pain Treatment - MotionWorks",
    "pain-management": "Chronic Pain Management Nairobi | Back Pain & Neck Pain Physiotherapist - MotionWorks",
    "geriatric-physiotherapy": "Physiotherapy for Seniors Nairobi | Home Physiotherapy for Elderly - MotionWorks",
    "home-based-therapy": "Home-Based Physio Nairobi | Home Physiotherapy for Elderly - MotionWorks",
    "chiropractic-services": "Chiropractic Services Nairobi | Back Pain & Neck Pain Treatment - MotionWorks",
    "massage-therapy": "Massage Therapy Physiotherapist Nairobi | Sports Rehabilitation Massage - MotionWorks",
    "neurological-therapy": "Neurological Physiotherapy Nairobi | Stroke Rehabilitation - MotionWorks",
    "cardiac-rehabilitation": "Cardiac Rehabilitation Nairobi | Heart Health Physiotherapy - MotionWorks",
  };

  const descriptionMap: { [key: string]: string } = {
    "sports-rehabilitation": "Best sports injury physiotherapy Nairobi. Sports rehabilitation massage for athletes. Expert treatment at Princess Park Apartments, Ngong Road. Call +254 706 143 886",
    "orthopedic-physiotherapy": "Expert back pain physiotherapy Nairobi, neck pain physiotherapist, joint pain treatment. Orthopedic manual therapy at Princess Park, Ngong Road. Post-surgery rehabilitation Nairobi.",
    "pain-management": "Chronic pain management Nairobi. Back pain physiotherapy, neck pain treatment, posture correction. Corporate physiotherapy for office workers. Princess Park Apartments, Ngong Road.",
    "geriatric-physiotherapy": "Physiotherapy for seniors Nairobi. Home physiotherapy for elderly. Home-based physio services across Nairobi. Expert care at Princess Park Apartments, Ngong Road.",
    "home-based-therapy": "Professional home-based physio Nairobi. Home physiotherapy for elderly, post-surgery rehabilitation at home. Serving Princess Park, Ngong Road and surrounding areas.",
    "chiropractic-services": "Chiropractic services Nairobi for back pain, neck pain, spinal alignment. Manual therapy and posture correction at Princess Park Apartments, Ngong Road.",
    "massage-therapy": "Massage therapy physiotherapist Nairobi. Sports rehabilitation massage, deep tissue massage, pain relief. Princess Park Apartments, Ngong Road. Call +254 706 143 886",
    "neurological-therapy": "Neurological physiotherapy Nairobi for stroke, Parkinson's, MS. Expert rehabilitation at Princess Park Apartments, Ngong Road. Call +254 706 143 886",
    "cardiac-rehabilitation": "Cardiac rehabilitation Nairobi. Heart health physiotherapy and cardiorespiratory care. Princess Park Apartments, Ngong Road. Call +254 706 143 886",
  };

  const title = titleMap[params.slug] || `${service.title} | MotionWorks Physiotherapy Nairobi`;
  const description = descriptionMap[params.slug] || service.description;
  const keywords = (service as any).keywords || service.title;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.motionworksphysioclinic.com/services/${params.slug}`,
      siteName: "MotionWorks Physiotherapy Clinic",
      locale: "en_KE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "https://x.com/MotionworksP?t=-mzwmz8IpMUh2vCuO0BBaA&s=09",
      title,
      description,
    },
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
