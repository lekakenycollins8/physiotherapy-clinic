"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPageTitle } from "@/app/layout";
import { ChevronRight } from "lucide-react";
import "../styles/page-header.css";

interface PageHeaderProps {
  title: string;
  breadcrumbs?: { label: string; href: string }[];
}

const PageHeader = ({ title, breadcrumbs = [] }: PageHeaderProps) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Only render after mount to ensure pathname is correct on the client.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate breadcrumbs automatically if not provided
  const autoBreadcrumbs =
    breadcrumbs.length > 0 ? breadcrumbs : generateBreadcrumbs(pathname);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Background pattern/overlay */}
      <div className="absolute inset-0 bg-[url('/physiodoc2.jpg')] bg-no-repeat bg-cover object-cover h-full w-full"></div>

      <div
        className="container mx-auto text-center py-16 px-4 relative z-10"
        style={{ maxWidth: "900px" }}
      >
        {/* Animated title with fade-in effect */}
        <h1
          className="text-white text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fadeIn"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          {title || getPageTitle(pathname)}
        </h1>

        {/* Breadcrumb navigation */}
        <nav
          className="flex justify-center items-center opacity-0 animate-fadeIn"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <ol className="flex flex-wrap justify-center items-center">
            {autoBreadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 mx-2 text-gray-100" />
                )}
                <li>
                  {index === autoBreadcrumbs.length - 1 ? (
                    <span className="text-blue-300 font-medium">
                      {crumb.label}
                    </span>
                  ) : (
                    <span className="text-white hover:text-blue-200 transition-colors duration-200">
                      <Link href={crumb.href}>{crumb.label}</Link>
                    </span>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

// Helper function to generate breadcrumbs from pathname
function generateBreadcrumbs(pathname: string) {
  if (!pathname) return [{ label: "Home", href: "/" }];

  // Start with home
  const breadcrumbs = [{ label: "Home", href: "/" }];

  // Skip the first empty string from pathname split
  const pathSegments = pathname.split("/").filter(Boolean);

  // Build up breadcrumbs path
  let currentPath = "";
  pathSegments.forEach((segment: string) => {
    currentPath += `/${segment}`;
    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    breadcrumbs.push({ label, href: currentPath });
  });

  return breadcrumbs;
}

export default PageHeader;