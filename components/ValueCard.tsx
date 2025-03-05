// File: components/ValueCard.tsx
"use client";

import { MotionWrapper } from "./MotionWrapper";
import { ClinicValue } from "@/types/aboutPageTypes";

interface ValueCardProps {
  value: ClinicValue;
  index: number;
}

export default function ValueCard({ value, index }: ValueCardProps): JSX.Element {
  return (
    <MotionWrapper
      className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      initialAnimation={{ opacity: 0, y: 20 }}
      inViewAnimation={{ opacity: 1, y: 0 }}
    >
      <h3 
        className="text-2xl font-bold mb-4 text-gray-800 tracking-tight" 
        tabIndex={0}
      >
        {value.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {value.description}
      </p>
    </MotionWrapper>
  );
}