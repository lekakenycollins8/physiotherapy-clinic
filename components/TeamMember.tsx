// File: components/TeamMember.tsx
"use client";

import Image from "next/image";
import { MotionWrapper } from "./MotionWrapper";
import { TeamMember as TeamMemberType } from "@/types/aboutPageTypes";

interface TeamMemberProps {
  member: TeamMemberType;
  index: number;
}

export default function TeamMember({ member, index }: TeamMemberProps): JSX.Element {
  return (
    <MotionWrapper
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      initialAnimation={{ opacity: 0, y: 50 }}
      inViewAnimation={{ opacity: 1, y: 0 }}
      hoverAnimation={{ scale: 1.05 }}
      tapAnimation={{ scale: 0.95 }}
      role="listitem"
      ariaLabel={`Team member: ${member.name},`}
    >
      <MotionWrapper
        initialAnimation={{ opacity: 0 }}
        inViewAnimation={{ opacity: 1 }}
      >
        <Image
          src={member.image}
          alt={member.altText}
          width={400}
          height={400}
          className="w-full h-64 object-cover"
          loading={index < 2 ? "eager" : "lazy"}
        />
      </MotionWrapper>
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900" tabIndex={0}>{member.name}</h3>
        <p className="text-blue-600 font-medium mb-2">{member.role}</p>
        <p className="text-gray-800">{member.bio}</p>
      </div>
    </MotionWrapper>
  );
}