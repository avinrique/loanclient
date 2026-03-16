"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="mesh-bg-1">
      <SectionHeading
        title="What Our Clients Say"
        subtitle="Real stories from people we've helped"
      />
      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.name} {...t} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
