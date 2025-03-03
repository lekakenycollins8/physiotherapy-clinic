// File: components/MotionWrapper.tsx
"use client";

import { motion, HTMLMotionProps, TargetAndTransition } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";

export function useReducedMotion(): boolean {
  // State to track if user prefers reduced motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", handleChange);
      
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  return prefersReducedMotion;
}

interface MotionWrapperProps {
  children: ReactNode;
  initialAnimation?: TargetAndTransition;
  inViewAnimation?: TargetAndTransition;
  hoverAnimation?: TargetAndTransition;
  tapAnimation?: TargetAndTransition;
  className?: string;
  ariaLabel?: string;
  ariaLevel?: number;
  tabIndex?: number;
  tagName?: keyof JSX.IntrinsicElements;
  role?: string;
  id?: string;
}

export function MotionWrapper({
  children,
  initialAnimation,
  inViewAnimation,
  hoverAnimation,
  tapAnimation,
  className,
  ariaLabel,
  ariaLevel,
  tabIndex,
  tagName = "div",
  role,
  id
}: MotionWrapperProps): JSX.Element {
  const prefersReducedMotion = useReducedMotion();
  
  // Conditionally apply animations based on user preference
  const motionProps: HTMLMotionProps<any> = prefersReducedMotion 
    ? {} 
    : {
        initial: initialAnimation,
        whileInView: inViewAnimation,
        whileHover: hoverAnimation,
        whileTap: tapAnimation,
        viewport: { once: true, margin: "-50px" }
      };

  // Create props for accessibility
  const accessibilityProps = {
    className,
    ...(ariaLabel && { 'aria-label': ariaLabel }),
    ...(ariaLevel && { 'aria-level': ariaLevel }),
    ...(tabIndex !== undefined && { tabIndex }),
    ...(role && { role }),
    ...(id && { id })
  };

  const MotionTag = motion(tagName);

  return (
    <MotionTag {...motionProps} {...accessibilityProps}>
      {children}
    </MotionTag>
  );
}