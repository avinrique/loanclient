"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border border-neutral-100 rounded-xl mb-3 transition-all duration-300 overflow-hidden ${
        isOpen
          ? "bg-gradient-to-r from-primary-50/50 to-transparent shadow-md shadow-primary-100/30 border-primary-200"
          : "bg-white hover:border-neutral-200 hover:shadow-sm"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 px-6 text-left cursor-pointer"
      >
        <span
          className={`text-lg font-semibold transition-colors ${
            isOpen ? "text-primary-700" : "text-neutral-800"
          }`}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? "bg-primary-500 text-white" : "bg-neutral-100 text-neutral-400"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-neutral-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
