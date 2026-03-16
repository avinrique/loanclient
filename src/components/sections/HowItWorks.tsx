"use client";

import { motion } from "framer-motion";
import { ClipboardList, Users, BadgeDollarSign } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { STEPS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

const iconMap = { ClipboardList, Users, BadgeDollarSign };
const colors = ["bg-indigo-50 text-indigo-600", "bg-violet-50 text-violet-600", "bg-emerald-50 text-emerald-600"];
const numColors = ["text-indigo-500", "text-violet-500", "text-emerald-500"];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="bg-white">
      <SectionHeading
        title="How It Works"
        subtitle="Three simple steps to your perfect loan"
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {STEPS.map((step, i) => {
          const Icon = iconMap[step.icon];
          return (
            <motion.div
              key={step.step}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={i}
              className="text-center"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl ${colors[i]} flex items-center justify-center mb-5`}>
                <Icon className="h-7 w-7" />
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider ${numColors[i]}`}>
                Step {step.step}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
