"use client";

import { motion } from "framer-motion";
import { Eye, Zap, ShieldCheck, Award } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { VALUES } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

const iconMap = { Eye, Zap, ShieldCheck, Award };

const valueColors = [
  "from-primary-400 to-primary-600",
  "from-amber-400 to-amber-600",
  "from-emerald-400 to-emerald-600",
  "from-violet-400 to-violet-600",
];

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold gradient-text">{value}</div>
      <div className="text-sm text-neutral-500 mt-1">{label}</div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <SectionWrapper id="about" className="mesh-bg-2">
      <SectionHeading title="About Us" />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text + Stats */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-5">
            Bridging Borrowers & Lenders{" "}
            <span className="gradient-text">Since 2018</span>
          </h3>
          <p className="text-neutral-600 leading-relaxed mb-4">
            LoanConnect was founded on a simple belief: finding the right loan
            shouldn&apos;t be complicated. We built a platform that puts
            borrowers first — matching you with lenders who compete for your
            business so you always get the best possible terms.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-8">
            Our team of financial experts and technology specialists work
            together to simplify the lending process. With a network of over 200
            trusted lending partners, we&apos;ve helped more than 10,000
            individuals and businesses find the financing they need.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-2xl shadow-lg shadow-neutral-100/80 border border-neutral-100">
            <StatBadge value="10K+" label="Borrowers Helped" />
            <StatBadge value="200+" label="Lending Partners" />
            <StatBadge value="98%" label="Satisfaction Rate" />
          </div>
        </motion.div>

        {/* Right: Values grid */}
        <div className="grid grid-cols-2 gap-5">
          {VALUES.map((value, i) => {
            const Icon = iconMap[value.icon];
            return (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                custom={i}
                className="bg-white rounded-2xl p-6 text-center shadow-md shadow-neutral-100/50 border border-neutral-100 hover:shadow-lg hover:border-primary-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${valueColors[i]} flex items-center justify-center mb-4 shadow-md`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="font-bold text-neutral-800 mb-2 text-lg">
                  {value.title}
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
