"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import HeroAnimation from "@/components/hero/HeroAnimation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50 to-neutral-50"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-200 opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent-400 opacity-15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-6">
              Trusted by 10,000+ borrowers
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-700 leading-tight font-[var(--font-heading)]">
              Your Bridge to{" "}
              <span className="text-primary-500">Better Loans</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 max-w-lg leading-relaxed">
              We connect you with trusted lenders who compete for your business.
              One application, multiple offers, zero hassle.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button size="lg">Apply Now</Button>
              </a>
              <a href="#how-it-works">
                <Button variant="outline" size="lg">
                  Learn How It Works
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right: Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <HeroAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
