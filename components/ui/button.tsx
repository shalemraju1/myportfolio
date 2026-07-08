import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "glass"
  | "outline"
  | "ghost"
  | "glow-blue"
  | "glow-purple"
  | "glow-pink";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// Support standard HTML button attributes
export type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
  target?: never;
};

// Support standard anchor attributes (internal & external links)
export type HTMLAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  target?: string;
  disabled?: boolean;
};

export type ButtonProps = ButtonBaseProps & (HTMLButtonProps | HTMLAnchorProps);

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    // Base styling definitions
    const baseStyles =
      "inline-flex items-center justify-center font-medium tracking-wide rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none cursor-pointer";

    // Size variants
    const sizes = {
      sm: "h-9 px-4 text-sm gap-1.5",
      md: "h-11 px-6 text-base gap-2",
      lg: "h-13 px-8 text-lg gap-2.5 rounded-xl",
    };

    // Style variants matching Apple + Linear + Vercel + glassmorphism themes
    const variants = {
      primary:
        "bg-linear-to-r from-neon-blue via-neon-purple to-neon-pink text-background font-semibold hover:opacity-95 shadow-[0_4px_20px_rgba(0,242,254,0.2)] hover:shadow-[0_4px_25px_rgba(0,242,254,0.35)]",
      secondary:
        "bg-zinc-900 border border-zinc-800 text-zinc-100 hover:bg-zinc-800 hover:text-white",
      glass:
        "bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-slate-200 hover:bg-white/[0.08] hover:border-white/[0.15] hover:text-white shadow-glass",
      outline:
        "bg-transparent border border-white/[0.15] text-slate-300 hover:bg-white/[0.05] hover:border-white/[0.3] hover:text-white",
      ghost:
        "bg-transparent text-slate-400 hover:bg-white/[0.05] hover:text-white",
      "glow-blue":
        "bg-background border border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue hover:glow-blue shadow-[0_0_15px_rgba(0,242,254,0.1)]",
      "glow-purple":
        "bg-background border border-neon-purple/30 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple hover:glow-purple shadow-[0_0_15px_rgba(157,78,221,0.1)]",
      "glow-pink":
        "bg-background border border-neon-pink/30 text-neon-pink hover:bg-neon-pink/10 hover:border-neon-pink hover:glow-pink shadow-[0_0_15px_rgba(244,63,94,0.1)]",
    };

    // Spin loader animation svg
    const spinner = (
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );

    const buttonContent = (
      <>
        {isLoading && spinner}
        {!isLoading && leftIcon && (
          <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0">{rightIcon}</span>
        )}
      </>
    );

    // If href is specified, render as a Link component (or anchor)
    if ("href" in props && props.href !== undefined) {
      const { href, disabled, ...anchorProps } = props as HTMLAnchorProps;
      
      if (disabled) {
        return (
          <span
            className={cn(
              baseStyles,
              variants[variant],
              sizes[size],
              "opacity-50 pointer-events-none",
              className
            )}
            role="link"
            aria-disabled="true"
          >
            {buttonContent}
          </span>
        );
      }

      // External or absolute links use standard <a> tag, internal links use Next.js <Link>
      const isExternal =
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("//") ||
        anchorProps.target === "_blank";

      if (isExternal) {
        return (
          <a
            href={href}
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            rel={anchorProps.target === "_blank" ? "noopener noreferrer" : undefined}
            {...anchorProps}
          >
            {buttonContent}
          </a>
        );
      }

      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          {...anchorProps}
        >
          {buttonContent}
        </Link>
      );
    }

    // Otherwise render standard HTML button
    const { type = "button", disabled, ...buttonProps } = props as HTMLButtonProps;

    return (
      <button
        type={type}
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...buttonProps}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = "Button";
