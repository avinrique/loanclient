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
    <div ref={ref} className="text-center mb-16">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="inline-flex items-center gap-3 mb-4"
      >
        <span className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary-400" />
        <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">
          {title}
        </span>
        <span className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary-400" />
      </motion.div>
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={1}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 font-[var(--font-heading)]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          className="mt-5 text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
