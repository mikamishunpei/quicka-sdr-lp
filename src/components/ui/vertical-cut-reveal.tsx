"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export const VerticalCutReveal = ({
  children,
  splitBy = "characters",
  staggerDuration = 0.02,
  transition = {
    type: "spring",
    stiffness: 200,
    damping: 21,
    mass: 1,
  },
  containerClassName,
  textClassName,
}: {
  children: string;
  splitBy?: "characters" | "words" | "lines";
  staggerDuration?: number;
  transition?: any;
  containerClassName?: string;
  textClassName?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getElements = () => {
    if (splitBy === "characters") {
      return children.split("");
    }
    if (splitBy === "words") {
      return children.split(" ");
    }
    return children.split("\n");
  };

  const elements = getElements();

  return (
    <div ref={ref} className={cn("overflow-hidden", containerClassName)}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: staggerDuration,
            },
          },
        }}
        className={cn("flex flex-wrap whitespace-pre", textClassName)}
      >
        {elements.map((el, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <motion.span
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition,
                },
              }}
              className="inline-block"
            >
              {el === " " && splitBy === "characters" ? "\u00A0" : el}
              {splitBy === "words" && i < elements.length - 1 && "\u00A0"}
            </motion.span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};
