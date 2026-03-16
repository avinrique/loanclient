"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useInView } from "@/hooks/useInView";

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="text-center mb-14">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-[var(--font-heading)]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="mt-3 text-base text-gray-500 max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
