"use client";

import Image from "next/image";
import { MotionWrapper } from "@/components/MotionWrapper";
import TeamMember from "@/components/TeamMember";
import ValueCard from "@/components/ValueCard";
import ErrorBoundary from "@/components/ErrorBoundary";
import { teamMembers, clinicValues } from "@/data/aboutPageData";

export default function AboutPage(): JSX.Element {
  return (
    <div className="py-24 bg-gradient-to-b from-blue-50 via-blue-100 to-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* About Section */}
        <ErrorBoundary>
          <MotionWrapper
            tagName="h1"
            className="text-4xl md:text-6xl font-extrabold text-center mb-16 relative
              bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent
              after:content-[''] after:absolute after:w-32 after:h-1.5 after:bg-blue-600
              after:rounded-full after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:transition-all after:duration-500 hover:after:w-64
              hover:after:bg-purple-600"
            ariaLevel={1}
            tabIndex={0}
          >
            Who We Are
          </MotionWrapper>

          <MotionWrapper
            className="flex flex-col md:flex-row items-center mb-32 gap-12"
            initialAnimation={{ opacity: 0, y: 50 }}
            inViewAnimation={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          >
            <div
              className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              aria-label="Clinic Interior Image"
            >
              <Image
                src="/physiodoc.jpg"
                alt="MotionWorks interior showing modern treatment area with physiotherapy equipment and comfortable seating"
                width={800}
                height={600}
                className="rounded-3xl object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
                priority={true}
                loading="eager"
              />
            </div>
            <MotionWrapper
              className="w-full md:w-1/2 space-y-8 md:pl-16"
              initialAnimation={{ opacity: 0, x: 50 }}
              inViewAnimation={{ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }}
            >
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent" aria-level={2} tabIndex={0}>
                  Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  At MotionWorks, our mission is to empower individuals to achieve optimal health and wellness through expert physiotherapy care.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent" aria-level={2} tabIndex={0}>
                  Our Vision
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We envision a community where everyone has access to high-quality physiotherapy services that enable them to live active, pain-free lives.
                </p>
              </div>
            </MotionWrapper>
          </MotionWrapper>
        </ErrorBoundary>

        {/* Values Section */}
        <ErrorBoundary>
          <MotionWrapper
            className="mb-32"
            initialAnimation={{ opacity: 0, y: 50 }}
            inViewAnimation={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          >
            <h2
              className="text-4xl font-bold text-center mb-16 text-gray-900 relative
              bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent
              after:content-[''] after:absolute after:w-32 after:h-1.5 after:bg-blue-600
              after:rounded-full after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:transition-all after:duration-500 hover:after:w-64
              hover:after:bg-purple-600"
              aria-level={2}
              tabIndex={0}
            >
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {clinicValues.map((value, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
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
            className="mb-24"
            initialAnimation={{ opacity: 0, y: 50 }}
            inViewAnimation={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            aria-labelledby="team-heading"
          >
            <h2
              id="team-heading"
              className="text-4xl font-bold text-center mb-16 text-gray-900 relative
              bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent
              after:content-[''] after:absolute after:w-32 after:h-1.5 after:bg-blue-600
              after:rounded-full after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:transition-all after:duration-500 hover:after:w-64
              hover:after:bg-purple-600"
              aria-level={2}
              tabIndex={0}
            >
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto" role="list">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="w-full h-full transform transition-all duration-500 hover:scale-103 hover:-translate-y-2 
                  shadow-lg hover:shadow-xl rounded-2xl overflow-hidden bg-white"
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