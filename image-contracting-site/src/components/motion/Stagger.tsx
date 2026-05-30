"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
};

export default function Stagger({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
