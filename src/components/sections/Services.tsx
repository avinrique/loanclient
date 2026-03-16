"use client";

import { User, Briefcase, Home, Car, GraduationCap, ArrowDownUp } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { SERVICES } from "@/lib/constants";

const iconMap = { User, Briefcase, Home, Car, GraduationCap, ArrowDownUp };
const iconBg = [
  "bg-indigo-50 text-indigo-600",
  "bg-violet-50 text-violet-600",
  "bg-rose-50 text-rose-600",
  "bg-amber-50 text-amber-600",
  "bg-emerald-50 text-emerald-600",
  "bg-sky-50 text-sky-600",
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="mesh-bg-1">
      <SectionHeading
        title="Our Services"
        subtitle="Loan options tailored to every need"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {SERVICES.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <AnimatedCard key={service.title} index={i}>
              <div className={`w-11 h-11 rounded-xl ${iconBg[i]} flex items-center justify-center mb-4`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </AnimatedCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
