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
        "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer",
        {
          "bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg":
            variant === "primary",
          "border-2 border-primary-500 text-primary-500 hover:bg-primary-50":
            variant === "outline",
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
