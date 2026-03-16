"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import clsx from "clsx";

export default function AnimatedCard({
  index = 0,
  className,
  children,
}: {
  index?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      custom={index}
      className={clsx(
        "relative bg-white rounded-2xl shadow-lg shadow-neutral-200/50 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-primary-100/50 hover:-translate-y-2 glow-border overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
