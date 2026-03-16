"use client";

import { motion } from "framer-motion";
import { Eye, Zap, ShieldCheck, Award } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { VALUES } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

const iconMap = { Eye, Zap, ShieldCheck, Award };

const valueColors = [
  "from-primary-400 to-primary-600",
  "from-amber-400 to-amber-600",
  "from-emerald-400 to-emerald-600",
  "from-violet-400 to-violet-600",
];

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold gradient-text">{value}</div>
      <div className="text-xs text-neutral-500 mt-1">{label}</div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <SectionWrapper id="about" className="mesh-bg-2">
      <SectionHeading
        title="About Us"
        subtitle="We make finding the right loan simple and stress-free."
      />

      {/* Stats bar */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="flex justify-center gap-10 sm:gap-16 mb-14 p-5 bg-white rounded-2xl shadow-md shadow-neutral-100/80 border border-neutral-100 max-w-lg mx-auto"
      >
        <StatBadge value="10K+" label="Borrowers" />
        <StatBadge value="200+" label="Lenders" />
        <StatBadge value="98%" label="Satisfaction" />
      </motion.div>

      {/* Values grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {VALUES.map((value, i) => {
          const Icon = iconMap[value.icon];
          return (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={i}
              className="bg-white rounded-2xl p-6 text-center shadow-md shadow-neutral-100/50 border border-neutral-100 hover:shadow-lg hover:border-primary-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${valueColors[i]} flex items-center justify-center mb-4 shadow-md`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-neutral-800 mb-1">
                {value.title}
              </h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
