"use client";

import { motion } from "framer-motion";
import { ClipboardList, Users, BadgeDollarSign, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { STEPS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

const iconMap = {
  ClipboardList,
  Users,
  BadgeDollarSign,
};

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="bg-white">
      <SectionHeading
        title="How It Works"
        subtitle="Getting the right loan is as easy as 1-2-3"
      />

      <div className="grid md:grid-cols-3 gap-8 relative">
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
                <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                  <Icon className="h-9 w-9 text-primary-500" />
                </div>
                <span className="text-sm font-bold text-primary-400 mb-2">
                  Step {step.step}
                </span>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow between steps (desktop only) */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-4 translate-x-1/2">
                  <ArrowRight className="h-6 w-6 text-primary-300" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
