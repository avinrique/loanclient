"use client";

import { motion } from "framer-motion";
import { Eye, Zap, ShieldCheck, Award } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { VALUES } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

const iconMap = { Eye, Zap, ShieldCheck, Award };

export default function AboutUs() {
  return (
    <SectionWrapper id="about" className="bg-white">
      <SectionHeading title="About Us" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <h3 className="text-2xl font-bold text-neutral-800 mb-4">
            Bridging Borrowers & Lenders Since 2018
          </h3>
          <p className="text-neutral-600 leading-relaxed mb-4">
            LoanConnect was founded on a simple belief: finding the right loan
            shouldn&apos;t be complicated. We built a platform that puts
            borrowers first — matching you with lenders who compete for your
            business so you always get the best possible terms.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Our team of financial experts and technology specialists work
            together to simplify the lending process. With a network of over 200
            trusted lending partners, we&apos;ve helped more than 10,000
            individuals and businesses find the financing they need.
          </p>
        </motion.div>

        {/* Values grid */}
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
                className="bg-neutral-50 rounded-xl p-5 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary-100 flex items-center justify-center mb-3">
                  <Icon className="h-6 w-6 text-primary-500" />
                </div>
                <h4 className="font-bold text-neutral-800 mb-1">
                  {value.title}
                </h4>
                <p className="text-sm text-neutral-500">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
