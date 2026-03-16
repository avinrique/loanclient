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
          "bg-primary-600 text-white hover:bg-primary-700 shadow-md shadow-primary-600/20 active:scale-[0.97]":
            variant === "primary",
          "border border-gray-200 text-gray-600 bg-white hover:border-gray-300 hover:text-gray-900 active:scale-[0.97]":
            variant === "outline",
          "px-4 py-1.5 text-[13px]": size === "sm",
          "px-5 py-2 text-sm": size === "md",
          "px-7 py-2.5 text-[15px]": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
