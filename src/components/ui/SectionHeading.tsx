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
        className="text-3xl sm:text-4xl font-bold text-primary-700 font-[var(--font-heading)]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
