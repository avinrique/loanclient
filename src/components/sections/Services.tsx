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

const iconMap = {
  User,
  Briefcase,
  Home,
  Car,
  GraduationCap,
  ArrowDownUp,
};

export default function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        title="Our Services"
        subtitle="We connect you with lenders across a wide range of loan types"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <AnimatedCard
              key={service.title}
              index={i}
              className="border-l-4 border-l-transparent hover:border-l-primary-500"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-primary-500" />
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
