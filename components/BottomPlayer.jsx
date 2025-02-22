import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Heart,
  Pause,
  Repeat,
  Shuffle,
  Volume2,
} from "lucide-react"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"
const BottomPlayer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex items-center gap-4">
    <div className="flex items-center gap-4 w-72">
      <div className="w-14 h-14 bg-zinc-800 rounded">
        <Image
          src="/placeholder.svg"
          alt="Now playing"
          width={56}
          height={56}
          className="object-cover" />
      </div>
      <div>
        <div className="font-medium">Love Line</div>
        <div className="text-sm text-zinc-400">Alisha Joe</div>
      </div>
      <Button variant="ghost" size="icon">
        <Heart className="w-4 h-4" />
      </Button>
    </div>

    <div className="flex-1 flex flex-col items-center gap-2">
      <div className="flex items-center gap-6">
        <Button variant="ghost" size="icon">
          <Shuffle className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          className="rounded-full bg-white text-black hover:bg-white/90">
          <Pause className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <ChevronRight className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Repeat className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex items-center gap-2 w-full max-w-xl">
        <div className="text-xs text-zinc-400">1:45</div>
        <Slider defaultValue={[40]} max={100} step={1} className="w-full" />
        <div className="text-xs text-zinc-400">4:42</div>
      </div>
    </div>

    <div className="w-72 flex items-center justify-end gap-2">
      <Volume2 className="w-4 h-4" />
      <Slider defaultValue={[60]} max={100} step={1} className="w-32" />
    </div>
  </div>
  )
}

export default BottomPlayer