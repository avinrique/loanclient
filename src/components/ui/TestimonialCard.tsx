"use client";

import { Star, Quote } from "lucide-react";
import AnimatedCard from "./AnimatedCard";

export default function TestimonialCard({
  name,
  loanType,
  rating,
  quote,
  index,
}: {
  name: string;
  loanType: string;
  rating: number;
  quote: string;
  index: number;
}) {
  return (
    <AnimatedCard index={index} className="flex flex-col justify-between">
      <div>
        <Quote className="h-8 w-8 text-primary-200 mb-4" />
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 fill-amber-400 text-amber-400"
            />
          ))}
        </div>
        <p className="text-neutral-600 leading-relaxed mb-6 text-[15px]">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-neutral-800">{name}</p>
          <p className="text-sm text-primary-500">{loanType}</p>
        </div>
      </div>
    </AnimatedCard>
  );
}
