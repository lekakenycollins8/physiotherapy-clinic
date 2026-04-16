"use client"

import type React from "react"
import "./globals.css"
import { Poppins } from "next/font/google"
import Header from "@/components/header"
import PageHeader from "@/components/PageHeader"
import Footer from "@/components/footer"
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp"
import { StickyCTA } from "@/components/StickyCTA"
import { usePathname } from "next/navigation"
import Script from "next/script"
import { useEffect } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

// ✅ Google Ads ID
const GA_TRACKING_ID = "AW-17151250932"

// ✅ Track pageview
const pageview = (url: string) => {
  ;(window as any).gtag?.("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

// ✅ Track call click conversion
const trackCallClick = () => {
  ;(window as any).gtag?.("event", "conversion", {
    send_to: "AW-17151250932/Ve7sCM2S_KUbEPSjrfI_",
  })
}

function getPageTitle(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean)
  if (segments.length === 0) return "Home"
  const pageSlug = segments[segments.length - 1]
  return pageSlug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export { getPageTitle }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const pageTitle = pathname !== "/" ? getPageTitle(pathname) : ""

  // ✅ Track page views & call clicks
  useEffect(() => {
    if (pathname) {
      pageview(pathname)
    }

    // Attach event listener for all tel: links
    const telLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]')
    const handleClick = () => trackCallClick()

    telLinks.forEach(link => link.addEventListener("click", handleClick))

    // Cleanup listeners on route change
    return () => {
      telLinks.forEach(link => link.removeEventListener("click", handleClick))
    }
  }, [pathname])

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>MotionWorks Physiotherapy Clinic | Best Physiotherapist in Nairobi, Kenya</title>
        <meta
          name="description"
          content="Best physiotherapy clinic in Nairobi, Kenya. Expert physiotherapist with 10+ years experience. Located at Princess Park Apartments, along Ngong Road. Sports injury, orthopedic, neurological & pain management services."
        />
        <meta name="keywords" content="best physiotherapist Nairobi, physiotherapy clinic Kenya, physiotherapist Princess Park, Ngong Road physiotherapy, sports injury rehabilitation Nairobi, back pain treatment Kenya, expert physiotherapist Nairobi, certified physiotherapist Kenya" />
        <meta name="author" content="MotionWorks Physiotherapy Clinic" />
        <meta name="geo.region" content="KE-110" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.290807;36.755807" />
        <meta name="ICBM" content="-1.290807, 36.755807" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.motionworksphysioclinic.com/" />
        <meta property="og:title" content="MotionWorks Physiotherapy | Best Physiotherapist in Nairobi, Kenya" />
        <meta property="og:description" content="Expert physiotherapy services in Nairobi. 10+ years experience. Princess Park Apartments, Ngong Road. Book your session today!" />
        <meta property="og:locale" content="en_KE" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.motionworksphysioclinic.com/" />
        <meta name="twitter:title" content="MotionWorks Physiotherapy | Best Physiotherapist in Nairobi" />
        <meta name="twitter:description" content="Expert physiotherapy services in Nairobi, Kenya. Princess Park Apartments, Ngong Road." />

        {/* ✅ Google Ads / Analytics Tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        
        {/* Structured Data - LocalBusiness Schema */}
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Physiotherapy",
              "name": "MotionWorks Physiotherapy Clinic",
              "image": "https://www.motionworksphysioclinic.com/logo.jpg",
              "@id": "https://www.motionworksphysioclinic.com",
              "url": "https://www.motionworksphysioclinic.com",
              "telephone": "+254706143886",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Princess Park Apartments, Ngong Road",
                "addressLocality": "Nairobi",
                "addressRegion": "Nairobi County",
                "addressCountry": "KE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -1.290807,
                "longitude": 36.755807
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "16:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "09:00",
                  "closes": "16:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/share/1AAviYEq7t/",
                "https://x.com/MotionworksP?t=-mzwmz8IpMUh2vCuO0BBaA&s=09",
                "https://www.instagram.com/motio_nworks?igsh=MTM3N3Jrb2pxYzJwNA=="
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "50"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Physiotherapy Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sports Injury Rehabilitation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Orthopedic Physiotherapy"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Neurological Physiotherapy"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Chronic Pain Management"
                    }
                  }
                ]
              }
            }
          `}
        </Script>
      </head>
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <Header />
        {pathname !== "/" && <PageHeader title={pageTitle} />}
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <StickyCTA />
      </body>
    </html>
  )
}
