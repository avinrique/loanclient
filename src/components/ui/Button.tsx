"use client";

import clsx from "clsx";
import { type ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer",
        {
          "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-[1.02] active:scale-[0.98]":
            variant === "primary",
          "border-2 border-primary-500 text-primary-600 hover:bg-primary-50 hover:border-primary-600 hover:scale-[1.02] active:scale-[0.98]":
            variant === "outline",
          "px-5 py-2.5 text-sm": size === "sm",
          "px-7 py-3.5 text-base": size === "md",
          "px-9 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
