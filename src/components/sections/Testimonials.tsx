"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-primary-50/30 to-neutral-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real stories from real people we've helped find the right loan"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
