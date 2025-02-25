"use client";

import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Header from "@/components/header"
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/footer"
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

function getPageTitle(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return 'Home';

  // Use the last segment as the page title
  const pageSlug = segments[segments.length - 1];

  // Format the title to be more readable
  return pageSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const pageTitle = pathname !== "/" ? getPageTitle(pathname) : "";

  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <Header />
        {pathname !== "/" && <PageHeader title={pageTitle} />}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}