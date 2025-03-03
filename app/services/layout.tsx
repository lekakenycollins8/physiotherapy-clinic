import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | PhysioWell Clinic",
  description:
    "Explore our comprehensive range of physiotherapy services designed to help you recover, strengthen, and thrive.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}