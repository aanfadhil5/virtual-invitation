"use client";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  icon,
  fullWidth = false,
}) => {
  const baseClasses =
    "rounded-full font-medium transition-all duration-300 flex items-center justify-center";

  const variantClasses = {
    primary: "bg-rose-500 text-white hover:bg-rose-600 active:bg-rose-700",
    secondary: "bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700",
    outline:
      "bg-transparent border-2 border-rose-500 text-rose-500 hover:bg-rose-50 active:bg-rose-100",
  };

  const sizeClasses = {
    sm: "text-sm py-1.5 px-3",
    md: "text-base py-2 px-5",
    lg: "text-lg py-3 px-8",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClass} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};
