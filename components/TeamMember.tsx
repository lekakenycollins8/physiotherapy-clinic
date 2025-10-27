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
      hoverAnimation={{ scale: 1.02 }}
      tapAnimation={{ scale: 0.98 }}
      role="listitem"
      ariaLabel={`Team member: ${member.name},`}
    >
      <MotionWrapper
        initialAnimation={{ opacity: 0 }}
        inViewAnimation={{ opacity: 1 }}
        className="flex justify-center items-center py-6"
      >
        <Image
          src={member.image}
          alt={member.altText}
          width={600}
          height={600}
          className="w-[80%] h-auto object-contain"
          loading={index < 2 ? "eager" : "lazy"}
          priority={index === 0}
        />
      </MotionWrapper>
      <div className="p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2" tabIndex={0}>{member.name}</h3>
        <p className="text-blue-600 font-semibold text-lg mb-4">{member.role}</p>
        {member.description && <p className="text-gray-700 text-base leading-relaxed">{member.description}</p>}
      </div>
    </MotionWrapper>
  );
}