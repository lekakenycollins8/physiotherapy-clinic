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
import * as gtag from "@/lib/gtag"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

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
      gtag.pageview(pathname)
    }

    // Attach event listener for tel: links
    const telLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]')
    const handleClick = () => gtag.trackCallClick()

    telLinks.forEach(link => link.addEventListener("click", handleClick))

    // cleanup
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
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
