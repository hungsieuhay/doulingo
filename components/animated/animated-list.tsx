"use client";

import { PropsWithChildren } from "react";
import { motion, type Variant } from "framer-motion";

type AnimatedListProps = {
  variants: {
    visible: Variant;
    hidden: Variant;
  };
  className?: string;
};

export const AnimatedList = ({
  variants,
  children,
  className,
}: PropsWithChildren<AnimatedListProps>) => {
  return (
    <motion.ul
      variants={variants}
      className={className}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      {children}
    </motion.ul>
  );
};

export const AnimatedItem = ({
  variants,
  children,
  className,
}: PropsWithChildren<AnimatedListProps>) => {
  return (
    <motion.li variants={variants} className={className}>
      {children}
    </motion.li>
  );
};
