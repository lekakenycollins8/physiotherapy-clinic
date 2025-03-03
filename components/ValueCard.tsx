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
      className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
      initialAnimation={{ opacity: 0, y: 20 }}
      inViewAnimation={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-xl font-semibold mb-3 text-gray-900" tabIndex={0}>{value.title}</h3>
      <p className="text-gray-800">{value.description}</p>
    </MotionWrapper>
  );
}