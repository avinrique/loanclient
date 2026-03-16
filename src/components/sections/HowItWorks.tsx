"use client";

import { motion } from "framer-motion";
import { ClipboardList, Users, BadgeDollarSign, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { STEPS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

const iconMap = {
  ClipboardList,
  Users,
  BadgeDollarSign,
};

const stepColors = [
  "from-primary-400 to-primary-600",
  "from-accent-400 to-accent-600",
  "from-emerald-400 to-emerald-600",
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="mesh-bg-2">
      <SectionHeading
        title="How It Works"
        subtitle="Getting the right loan is as easy as 1-2-3"
      />

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Desktop connecting line */}
        <div className="hidden md:block absolute top-[72px] left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-primary-200 via-accent-200 to-emerald-200" />

        {STEPS.map((step, i) => {
          const Icon = iconMap[step.icon];
          return (
            <div key={step.step} className="relative flex flex-col items-center">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                custom={i}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="relative mb-8">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${stepColors[i]} flex items-center justify-center shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-sm font-bold text-primary-600 border-2 border-primary-100">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow between steps (desktop only) */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:flex absolute top-[60px] -right-4 translate-x-1/2 z-10">
                  <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 text-primary-400" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
