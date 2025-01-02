import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-14 w-full group-[.invalid]:border-red-500 rounded-md border border-gray-300 bg-background px-4 text-sm text-gray-900 outline-none transition-colors [appearance:textfield] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus:border-accent focus-visible:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
          className,
    )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
