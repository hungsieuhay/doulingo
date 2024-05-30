"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedTitleProps = {
  className?: string;
  duration?: number;
};

export const AnimatedTitle = ({
  children,
  className,
  duration = 1,
}: PropsWithChildren<AnimatedTitleProps>) => {
  return (
    <motion.div
      initial={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
      whileInView={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      viewport={{ once: true }}
      transition={{ duration, ease: [0, 0.55, 0.45, 1] }}
      className={cn(
        "relative left-1/2 inline-block -translate-x-1/2",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
