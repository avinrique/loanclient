"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import FrameAnimation from "@/components/hero/FrameAnimation";

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.25], [0, -60]);
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div
      id="hero-scroll-wrapper"
      ref={wrapperRef}
      className="relative"
      style={{ height: "250vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden" id="hero">
        {/* Light background matching illustration palette */}
        <div className="absolute inset-0 bg-[#F5F7FB]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(129,140,248,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(52,211,153,0.06),transparent_50%)]" />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `radial-gradient(circle, #C7D2FE 0.8px, transparent 0.8px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6">
          {/* Top: Text content */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="text-center max-w-3xl mx-auto mb-8 lg:mb-10"
          >
            <motion.div
              style={{ opacity: badgeOpacity }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-indigo-600 text-sm font-medium rounded-full mb-6 shadow-sm border border-indigo-100/60"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Trusted by 10,000+ borrowers
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight font-[var(--font-heading)] text-gray-900">
              Your Bridge to{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                Better Loans
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              One application. Multiple lender offers. Zero hassle.
              <br className="hidden sm:block" />
              We find the best loan for you.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#contact">
                <Button size="lg" className="!bg-indigo-600 hover:!bg-indigo-700 !shadow-indigo-500/25 group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </a>
              <a href="#how-it-works">
                <Button variant="outline" size="lg">
                  How It Works
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Center: Frame animation - the hero visual */}
          <div className="relative w-full max-w-2xl mx-auto">
            {/* Soft shadow under the illustration */}
            <div className="absolute -bottom-6 left-[10%] right-[10%] h-12 bg-indigo-200/30 blur-2xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl shadow-gray-200/60 ring-1 ring-gray-100">
              <FrameAnimation />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5"
          animate={{ opacity: [0.2, 0.5, 0.2], y: [0, 5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
            Scroll
          </span>
          <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
        </motion.div>
      </div>
    </div>
  );
}
