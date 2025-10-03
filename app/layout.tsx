"use client"

import type React from "react"
import "./globals.css"
import { Poppins } from "next/font/google"
import Header from "@/components/header"
import PageHeader from "@/components/PageHeader"
import Footer from "@/components/footer"
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
        <title>Motion Works Physiotherapy Clinic</title>
        <meta
          name="description"
          content="Motion Works Physiotherapy Clinic - Your path to recovery and wellness."
        />

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
      </head>
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <Header />
        {pathname !== "/" && <PageHeader title={pageTitle} />}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
