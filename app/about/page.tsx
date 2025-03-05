"use client";

import Image from "next/image";
import { MotionWrapper } from "@/components/MotionWrapper";
import TeamMember from "@/components/TeamMember";
import ValueCard from "@/components/ValueCard";
import ErrorBoundary from "@/components/ErrorBoundary";
import { teamMembers, clinicValues } from "@/data/aboutPageData";

export default function AboutPage(): JSX.Element {
  return (
    <div className="py-20 bg-gray-50 bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <ErrorBoundary>
            <MotionWrapper
            tagName="h1"
            className="text-4xl md:text-5xl font-bold text-center mb-12 relative
              bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
              after:content-[''] after:absolute after:w-48 after:h-1 after:bg-blue-500
              after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:transition-all after:duration-300 hover:after:w-64
              hover:after:bg-purple-500"
            ariaLevel={1}
            tabIndex={0}
            >
            Who We Are
            </MotionWrapper>

          <MotionWrapper
            className="flex flex-col md:flex-row items-center mb-20 gap-8"
            initialAnimation={{ opacity: 0, y: 50 }}
            inViewAnimation={{ opacity: 1, y: 0 }}
          >
            <div
              className="w-full md:w-1/2"
              aria-label="Clinic Interior Image"
            >
              <Image
              src="/physio2.avif"
              alt="PhysioWell Clinic interior showing modern treatment area with physiotherapy equipment and comfortable seating"
              width={800}
              height={600}
              className="rounded-3xl shadow-lg"
              priority={true}
              loading="eager"
              />
            </div>
            <MotionWrapper
              className="w-full md:w-1/2 space-y-6 md:pl-12"
              initialAnimation={{ opacity: 0, x: 50 }}
              inViewAnimation={{ opacity: 1, x: 0 }}
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900" aria-level={2} tabIndex={0}>
                  Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At PhysioWell Clinic, our mission is to empower individuals to achieve optimal health and wellness through expert physiotherapy care.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900" aria-level={2} tabIndex={0}>
                  Our Vision
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We envision a community where everyone has access to high-quality physiotherapy services that enable them to live active, pain-free lives.
                </p>
              </div>
            </MotionWrapper>
          </MotionWrapper>
        </ErrorBoundary>

        {/* Values Section */}
        <ErrorBoundary>
          <MotionWrapper
            className="mb-20"
            initialAnimation={{ opacity: 0, y: 50 }}
            inViewAnimation={{ opacity: 1, y: 0 }}
          >
            <h2
              className="text-3xl font-bold text-center mb-12 text-gray-900 relative
              bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
              after:content-[''] after:absolute after:w-48 after:h-1 after:bg-blue-500
              after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:transition-all after:duration-300 hover:after:w-64
              hover:after:bg-purple-500"
              aria-level={2}
              tabIndex={0}
            >
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {clinicValues.map((value, index) => (
                <div
                  key={index}
                  className="transform transition-transform duration-300 hover:scale-105"
                >
                  <ValueCard value={value} index={index} />
                </div>
              ))}
            </div>
          </MotionWrapper>
        </ErrorBoundary>

        {/* Team Section */}
        <ErrorBoundary>
          <MotionWrapper
            className="mb-20"
            initialAnimation={{ opacity: 0, y: 50 }}
            inViewAnimation={{ opacity: 1, y: 0 }}
            aria-labelledby="team-heading"
          >
            <h2
              id="team-heading"
              className="text-3xl font-bold text-center mb-12 text-gray-900 relative
              bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
              after:content-[''] after:absolute after:w-48 after:h-1 after:bg-blue-500
              after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:transition-all after:duration-300 hover:after:w-64
              hover:after:bg-purple-500"
              aria-level={2}
              tabIndex={0}
            >
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto" role="list">
              {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full h-full transform transition-transform duration-300 hover:scale-105 shadow-lg rounded-lg overflow-hidden"
              >
                <TeamMember member={member} index={index} />
              </div>
              ))}
            </div>
          </MotionWrapper>
        </ErrorBoundary>
      </div>
    </div>
  );
}