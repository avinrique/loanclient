"use client";

import {
  User,
  Briefcase,
  Home,
  Car,
  GraduationCap,
  ArrowDownUp,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { SERVICES } from "@/lib/constants";

const iconMap = { User, Briefcase, Home, Car, GraduationCap, ArrowDownUp };

const iconColors = [
  "from-primary-400 to-primary-600",
  "from-violet-400 to-violet-600",
  "from-rose-400 to-rose-600",
  "from-amber-400 to-amber-600",
  "from-emerald-400 to-emerald-600",
  "from-accent-400 to-accent-600",
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="mesh-bg-1">
      <SectionHeading
        title="Our Services"
        subtitle="We connect you with lenders across a wide range of loan types"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <AnimatedCard key={service.title} index={i}>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${iconColors[i]} flex items-center justify-center mb-5 shadow-md`}>
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-800 mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </AnimatedCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
