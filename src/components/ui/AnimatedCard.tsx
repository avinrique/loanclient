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
        "bg-white rounded-2xl border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gray-100/80 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
