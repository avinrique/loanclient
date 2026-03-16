"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import HeroAnimation from "@/components/hero/HeroAnimation";

function FloatingParticle({ className }: { className: string }) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{ animation: `particle-float ${4 + Math.random() * 4}s ease-in-out infinite` }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Rich background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,165,233,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(34,211,238,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_10%,rgba(8,145,178,0.2),transparent_40%)]" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating particles */}
      <FloatingParticle className="w-2 h-2 bg-primary-400/30 top-[20%] left-[10%]" />
      <FloatingParticle className="w-3 h-3 bg-accent-400/20 top-[60%] left-[5%]" />
      <FloatingParticle className="w-2 h-2 bg-primary-300/25 top-[30%] right-[15%]" />
      <FloatingParticle className="w-4 h-4 bg-accent-500/15 top-[70%] right-[10%]" />
      <FloatingParticle className="w-2 h-2 bg-primary-400/20 top-[85%] left-[30%]" />
      <FloatingParticle className="w-3 h-3 bg-accent-400/15 top-[15%] right-[35%]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-primary-200 text-sm font-medium rounded-full mb-8 border border-white/10"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Trusted by 10,000+ borrowers nationwide
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight font-[var(--font-heading)]">
              <span className="text-white">Your Bridge to</span>
              <br />
              <span className="gradient-text">Better Loans</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-primary-200/80 max-w-lg leading-relaxed">
              We connect you with trusted lenders who compete for your business.
              One application, multiple offers, zero hassle.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button size="lg" className="group">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#how-it-works">
                <Button variant="outline" size="lg" className="!border-white/20 !text-white hover:!bg-white/10">
                  Learn How It Works
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-primary-300/70">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary-400" />
                Bank-level Security
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary-400" />
                Best Rates Guaranteed
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary-400" />
                200+ Lending Partners
              </div>
            </div>
          </motion.div>

          {/* Right: Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Glow behind animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl blur-3xl" />
            <div className="relative glass rounded-3xl p-6 sm:p-8">
              <HeroAnimation />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent" />
    </section>
  );
}
