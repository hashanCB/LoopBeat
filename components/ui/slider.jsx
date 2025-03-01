"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"

const Slider = React.forwardRef(({ className, max, value,isplay, ...props }, ref) => {
  const percentage = max > 0 && !isNaN(value) ? (value / max) * 100 : 0;


  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex w-full touch-none select-none items-center bg-primary/40", className)}
      value={value}
      max={max}
      {...props}
    >
<SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
  <motion.div
    className="absolute h-full"
    style={{
      background: "linear-gradient(120deg, rgba(255,255,255,0.3) 25%, rgba(0,0,0,0) 50%, rgba(255,255,255,0.3) 75%)",
      backgroundSize: "200% 100%"
    }}
    initial={{ width: "0%", backgroundPosition: "0% 0%" }}
     animate={ isplay ? { width: `${percentage}%`, backgroundPosition: "100% 0%" } : { width: `${percentage}%` }}
    transition={ isplay ? { ease: "linear", duration: 1, repeat: Infinity } : { ease: "linear", duration: 0.5 } }
  />
</SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      />
    </SliderPrimitive.Root>
  );
})

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
