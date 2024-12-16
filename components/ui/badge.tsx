import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-xl border px-1 md:px-2.5 py-0.5 text-xs/3 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gray-100 text-gray-800  shadow shadow-black hover:bg-gray-100/80",
        secondary:
          "border-transparent bg-yellow-300 text-yellow-900 shadow shadow-black hover:bg-yellow-300/80",
        destructive:
          "border-transparent bg-red-500 text-red-900   shadow shadow-black hover:bg-red-500/80",
        outline: "text-foreground",
        green: 
          "border-transparent bg-green-400 text-green-900  shadow shadow-black hover:bg-green-400/80",
        yellow:
          "border-transparent bg-yellow-300 text-yellow-900 shadow shadow-black hover:bg-yellow-300/80",
        red:
          "border-transparent bg-red-500 text-red-900 shadow shadow-black hover:bg-red-500/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)


export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
