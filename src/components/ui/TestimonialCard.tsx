"use client";

import { Star } from "lucide-react";
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
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 fill-amber-400 text-amber-400"
            />
          ))}
        </div>
        <p className="text-neutral-600 italic leading-relaxed mb-6">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
      <div>
        <p className="font-semibold text-neutral-800">{name}</p>
        <p className="text-sm text-primary-500">{loanType}</p>
      </div>
    </AnimatedCard>
  );
}
