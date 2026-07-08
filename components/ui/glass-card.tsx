import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: "blue" | "purple" | "pink" | "none";
  glowPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  glowIntensity?: "low" | "medium" | "high";
  interactive?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      className,
      children,
      glowColor = "none",
      glowPosition = "top-left",
      glowIntensity = "low",
      interactive = false,
      ...props
    },
    ref
  ) => {
    // Map glow positions to CSS classes
    const positionClasses = {
      "top-left": "-top-20 -left-20",
      "top-right": "-top-20 -right-20",
      "bottom-left": "-bottom-20 -left-20",
      "bottom-right": "-bottom-20 -right-20",
      center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    };

    // Map glow colors to tailwind color variables
    const colorClasses = {
      blue: "bg-neon-blue",
      purple: "bg-neon-purple",
      pink: "bg-neon-pink",
      none: "",
    };

    // Map glow intensities
    const intensities = {
      low: "w-40 h-40 blur-[80px] opacity-10 group-hover:opacity-20",
      medium: "w-52 h-52 blur-[100px] opacity-15 group-hover:opacity-30",
      high: "w-64 h-64 blur-[120px] opacity-20 group-hover:opacity-40",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-glass border border-white/[0.08] bg-slate-950/40 backdrop-blur-xl shadow-glass transition-all duration-400 ease-out",
          interactive && [
            "hover:-translate-y-1 hover:border-white/15 hover:shadow-2xl hover:bg-slate-950/60",
            glowColor === "blue" && "hover:shadow-neon-blue/10 hover:border-neon-blue/20",
            glowColor === "purple" && "hover:shadow-neon-purple/10 hover:border-neon-purple/20",
            glowColor === "pink" && "hover:shadow-neon-pink/10 hover:border-neon-pink/20",
          ],
          className
        )}
        {...props}
      >
        {/* Futuristic glowing backdrop orb inside the card to simulate glass refraction */}
        {glowColor !== "none" && (
          <div
            className={cn(
              "pointer-events-none absolute -z-10 rounded-full transition-all duration-500 ease-out",
              positionClasses[glowPosition],
              colorClasses[glowColor],
              intensities[glowIntensity]
            )}
            aria-hidden="true"
          />
        )}

        {/* Subtle inner grid lines or shine card overlay */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-white/[0.02] to-transparent pointer-events-none" />

        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col h-full w-full">{children}</div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

// Card subcomponents for modular structure
export interface GlassCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GlassCardHeader = React.forwardRef<HTMLDivElement, GlassCardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
      />
    );
  }
);
GlassCardHeader.displayName = "GlassCardHeader";

export interface GlassCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const GlassCardTitle = React.forwardRef<HTMLHeadingElement, GlassCardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          "text-xl font-semibold tracking-tight text-slate-100",
          className
        )}
        {...props}
      />
    );
  }
);
GlassCardTitle.displayName = "GlassCardTitle";

export interface GlassCardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const GlassCardDescription = React.forwardRef<
  HTMLParagraphElement,
  GlassCardDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-slate-400 leading-relaxed", className)}
      {...props}
    />
  );
});
GlassCardDescription.displayName = "GlassCardDescription";

export interface GlassCardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GlassCardContent = React.forwardRef<HTMLDivElement, GlassCardContentProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("p-6 pt-0 flex-1", className)} {...props} />;
  }
);
GlassCardContent.displayName = "GlassCardContent";

export interface GlassCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GlassCardFooter = React.forwardRef<HTMLDivElement, GlassCardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0 border-t border-white/[0.04] mt-auto", className)}
        {...props}
      />
    );
  }
);
GlassCardFooter.displayName = "GlassCardFooter";
