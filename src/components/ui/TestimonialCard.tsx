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
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-xs">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-xs text-primary-600">{loanType}</p>
        </div>
      </div>
    </AnimatedCard>
  );
}
