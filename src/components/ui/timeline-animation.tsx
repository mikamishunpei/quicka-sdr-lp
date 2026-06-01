"use client";
import { motion } from "framer-motion";

export const TimelineContent = ({
  children,
  animationNum,
  customVariants,
  as = "div",
  className
}: {
  children: React.ReactNode;
  animationNum: number;
  timelineRef?: React.RefObject<any>;
  customVariants?: any;
  as?: any;
  className?: string;
}) => {
  const Component = motion[as as keyof typeof motion] as any;
  return (
    <Component
      variants={customVariants}
      custom={animationNum}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </Component>
  );
};
