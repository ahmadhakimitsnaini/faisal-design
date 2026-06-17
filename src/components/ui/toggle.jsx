"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-vintage-cream transition-colors hover:bg-vintage-gray/20 hover:text-vintage-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vintage-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-vintage-black data-[state=on]:text-vintage-cream",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-vintage-gray/20 bg-transparent hover:bg-vintage-gray/20 hover:text-vintage-black",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
