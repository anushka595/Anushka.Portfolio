import * as React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "flat" | "bordered";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: `
        relative rounded-xl p-6
        bg-gradient-to-br from-white/8 via-white/4 to-transparent
        backdrop-blur-lg
        border border-white/10
        shadow-lg shadow-black/10
        text-white
        hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/10
        transition-all duration-300 ease-out
      `,
      elevated: `
        relative rounded-xl p-6
        bg-gradient-to-br from-white/12 via-white/6 to-white/2
        backdrop-blur-xl
        border border-white/15
        shadow-2xl shadow-black/20
        text-white
        hover:border-blue-400/30 hover:shadow-blue-500/20
        hover:-translate-y-1
        transition-all duration-300 ease-out
      `,
      flat: `
        relative rounded-xl p-6
        bg-white/5
        backdrop-blur-md
        border border-white/5
        text-white
        hover:bg-white/8 hover:border-white/10
        transition-all duration-300 ease-out
      `,
      bordered: `
        relative rounded-xl p-6
        bg-black/40
        backdrop-blur-sm
        border-2 border-blue-500/30
        text-white
        hover:border-blue-400/50 hover:bg-black/60
        transition-all duration-300 ease-out
      `,
    };

    return (
      <div
        ref={ref}
        className={cn(variants[variant], className)}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

// Card Header Component
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col space-y-2 mb-4", className)}
        {...props}
      />
    );
  }
);

CardHeader.displayName = "CardHeader";

// Card Title Component
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          "text-2xl font-bold tracking-tight text-white leading-tight",
          className
        )}
        {...props}
      />
    );
  }
);

CardTitle.displayName = "CardTitle";

// Card Description Component
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-sm text-white/60 leading-relaxed", className)}
        {...props}
      />
    );
  }
);

CardDescription.displayName = "CardDescription";

// Card Content Component
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("text-white/80", className)}
        {...props}
      />
    );
  }
);

CardContent.displayName = "CardContent";

// Card Footer Component
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center pt-4 mt-4 border-t border-white/10", className)}
        {...props}
      />
    );
  }
);

CardFooter.displayName = "CardFooter";

export { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
};