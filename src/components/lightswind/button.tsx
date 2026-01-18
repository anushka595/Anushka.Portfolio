import * as React from "react";
import { cn } from "../../lib/utils";

// Button style variants optimized for portfolio theme
const buttonStyles = {
  variant: {
    default: `
      bg-blue-600 text-white 
      hover:bg-blue-700 
      shadow-lg shadow-blue-500/20 
      hover:shadow-xl hover:shadow-blue-500/30
      border border-blue-500/20
    `,
    destructive: `
      bg-red-600 text-white 
      hover:bg-red-700 
      shadow-lg shadow-red-500/20
      border border-red-500/20
    `,
    outline: `
      border-2 border-white/20 
      bg-white/5 text-white 
      hover:bg-white/10 hover:border-white/30
      backdrop-blur-sm
    `,
    secondary: `
      bg-white/10 text-white 
      hover:bg-white/15
      border border-white/10
      backdrop-blur-sm
    `,
    ghost: `
      text-white/80 
      hover:bg-white/10 hover:text-white
    `,
    link: `
      text-blue-400 
      underline-offset-4 
      hover:underline hover:text-blue-300
    `,
    gradient: `
      bg-gradient-to-r from-blue-600 to-cyan-600 
      text-white 
      hover:from-blue-700 hover:to-cyan-700
      shadow-lg shadow-blue-500/20
      hover:shadow-xl hover:shadow-cyan-500/30
    `,
    glass: `
      bg-white/5 text-white 
      backdrop-blur-xl
      border border-white/10
      hover:bg-white/10 hover:border-white/20
      shadow-lg shadow-black/10
    `,
  },
  size: {
    default: "h-11 px-6 py-2.5 text-sm",
    sm: "h-9 px-4 py-2 text-xs",
    lg: "h-12 px-8 py-3 text-base",
    xl: "h-14 px-10 py-4 text-lg",
    icon: "h-11 w-11",
  }
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonStyles.variant;
  size?: keyof typeof buttonStyles.size;
  asChild?: boolean;
}

// Button variants function for external use
export function buttonVariants(options: {
  variant?: keyof typeof buttonStyles.variant;
  size?: keyof typeof buttonStyles.size;
  className?: string;
} = {}): string {
  const { variant = "default", size = "default", className } = options;
  
  return cn(
    `inline-flex items-center justify-center gap-2.5 
    whitespace-nowrap rounded-lg text-sm font-semibold 
    ring-offset-background transition-all duration-300 ease-out
    focus-visible:outline-none focus-visible:ring-2 
    focus-visible:ring-blue-400 focus-visible:ring-offset-2 
    disabled:pointer-events-none disabled:opacity-50 
    disabled:cursor-not-allowed
    [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
    active:scale-[0.98]`,
    buttonStyles.variant[variant],
    buttonStyles.size[size],
    className
  );
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <React.Fragment>
          {React.Children.map(props.children, child => {
            if (React.isValidElement(child)) {
              return (
                <span className={buttonVariants({ variant, size, className })}>
                  {child}
                </span>
              );
            }
            return child;
          })}
        </React.Fragment>
      );
    }

    return (
      <button 
        className={buttonVariants({ variant, size, className })} 
        ref={ref} 
        {...props} 
      />
    );
  }
);

Button.displayName = "Button";

export { Button };