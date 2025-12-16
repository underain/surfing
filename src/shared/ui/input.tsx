import * as React from "react";
import { Input as BaseInput } from "@base-ui-components/react/input";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const inputVariants = cva(
  "file:text-foreground text-primary placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex h-9 w-full min-w-0 rounded-md border border-[rgba(56,84,98,0.5)] bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "rounded-[100px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
export type AppInputProps = React.ComponentProps<typeof BaseInput> &
  VariantProps<typeof inputVariants>;

export const Input = React.forwardRef<HTMLInputElement, AppInputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <BaseInput
        ref={ref}
        className={cn(inputVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
