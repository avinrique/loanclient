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
        "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap",
        {
          "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 active:scale-[0.97]":
            variant === "primary",
          "border border-neutral-300 text-neutral-700 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50 active:scale-[0.97]":
            variant === "outline",
          "px-5 py-2 text-sm": size === "sm",
          "px-6 py-2.5 text-[15px]": size === "md",
          "px-8 py-3 text-base": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
