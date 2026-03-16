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
      className={`rounded-xl mb-2 transition-all duration-200 border ${
        isOpen
          ? "bg-primary-50/50 border-primary-100 shadow-sm"
          : "bg-white border-gray-100 hover:border-gray-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 px-5 text-left cursor-pointer"
      >
        <span className={`text-sm font-semibold transition-colors pr-4 ${
          isOpen ? "text-primary-700" : "text-gray-800"
        }`}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className={`h-4 w-4 ${isOpen ? "text-primary-600" : "text-gray-400"}`} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
