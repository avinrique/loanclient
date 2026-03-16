"use client";

import { motion } from "framer-motion";
import { Eye, Zap, ShieldCheck, Award } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { VALUES } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

const iconMap = { Eye, Zap, ShieldCheck, Award };
const iconBg = [
  "bg-indigo-50 text-indigo-600",
  "bg-amber-50 text-amber-600",
  "bg-emerald-50 text-emerald-600",
  "bg-violet-50 text-violet-600",
];

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-extrabold gradient-text">{value}</div>
      <div className="text-xs text-gray-400 mt-0.5">{label}</div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <SectionWrapper id="about" className="bg-white">
      <SectionHeading
        title="About Us"
        subtitle="Connecting borrowers with the right lenders since 2018."
      />

      {/* Stats */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center gap-12 mb-12 max-w-sm mx-auto"
      >
        <Stat value="10K+" label="Borrowers" />
        <Stat value="200+" label="Lenders" />
        <Stat value="98%" label="Satisfied" />
      </motion.div>

      {/* Values */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {VALUES.map((value, i) => {
          const Icon = iconMap[value.icon];
          return (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="text-center p-5 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-sm"
            >
              <div className={`w-11 h-11 mx-auto rounded-xl ${iconBg[i]} flex items-center justify-center mb-3`}>
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">{value.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{value.description}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
