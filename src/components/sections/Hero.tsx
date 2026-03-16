"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shield, TrendingUp, Users, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import FrameAnimation from "@/components/hero/FrameAnimation";

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  // Parallax: text fades out and moves up as you scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [0, -80]);

  return (
    <div id="hero-scroll-wrapper" ref={wrapperRef} className="relative" style={{ height: "300vh" }}>
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen overflow-hidden" id="hero">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#020B18] via-[#051D2E] to-[#0A2A3C]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(14,165,233,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_70%,rgba(8,145,178,0.08),transparent_50%)]" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: Text */}
              <motion.div style={{ opacity: textOpacity, y: textY }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.06] backdrop-blur-sm text-primary-300/90 text-sm font-medium rounded-full mb-8 border border-white/[0.08]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Trusted by 10,000+ borrowers
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.08] tracking-tight font-[var(--font-heading)]">
                  <span className="text-white">Your Bridge to</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary-300 via-accent-400 to-primary-400 bg-clip-text text-transparent">
                    Better Loans
                  </span>
                </h1>

                <p className="mt-6 text-[17px] text-neutral-400 max-w-md leading-relaxed">
                  We connect you with trusted lenders who compete for your
                  business. One application, multiple offers, zero hassle.
                </p>

                <div className="mt-9 flex flex-col sm:flex-row gap-3">
                  <a href="#contact">
                    <Button size="lg" className="group">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </a>
                  <a href="#how-it-works">
                    <Button
                      variant="outline"
                      size="lg"
                      className="!border-white/[0.12] !text-neutral-300 hover:!bg-white/[0.06] hover:!border-white/[0.2]"
                    >
                      How It Works
                    </Button>
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-5 text-[13px] text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <Shield className="h-3.5 w-3.5 text-primary-500/70" />
                    Bank-level Security
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="h-3.5 w-3.5 text-primary-500/70" />
                    Best Rates
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-primary-500/70" />
                    200+ Partners
                  </div>
                </div>
              </motion.div>

              {/* Right: Scroll-driven frame animation */}
              <div className="relative">
                {/* Ambient glow */}
                <div className="absolute -inset-8 bg-gradient-to-br from-primary-500/[0.07] to-accent-500/[0.05] rounded-[2rem] blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/[0.08] shadow-2xl shadow-black/40">
                  <FrameAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-500"
          animate={{ opacity: [0.3, 0.7, 0.3], y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[11px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
