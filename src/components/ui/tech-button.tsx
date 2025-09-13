import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const techButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        // Custom LC Tech variants
        techPrimary: "bg-tech-blue text-white shadow-lg hover:shadow-xl hover:shadow-tech-cyan/50 transform hover:scale-105 transition-all duration-300",
        techSecondary: "bg-tech-gray text-tech-cyan border border-tech-cyan/30 shadow-lg hover:bg-tech-cyan/10 hover:shadow-cyan",
        techNeon: "bg-gradient-to-r from-tech-cyan to-tech-neon text-black font-semibold shadow-lg hover:shadow-neon transform hover:scale-105 transition-all duration-300",
        techGhost: "text-tech-cyan border border-tech-cyan/30 hover:bg-tech-cyan/10 hover:text-white transition-all duration-300",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface TechButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof techButtonVariants> {
  asChild?: boolean;
}

const TechButton = React.forwardRef<HTMLButtonElement, TechButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(techButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
TechButton.displayName = "TechButton";

export { TechButton, techButtonVariants };