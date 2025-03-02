import React from 'react'
import { Button } from "@/components/ui/button"

import {
    Play,
  } from "lucide-react"
  import Image from "next/image"

const ArtistHeader = () => {
  return (
     <div className="relative h-80 bg-gradient-to-r from-red-600 to-orange-600 p-8">

              <div className="absolute inset-0">
                <Image
                  src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-b0382240eaf33d26daf60c89dada3474-zRh2uaziL4AsSvkMaMCaM54qBD17eC.webp`}
                  alt="Artist cover"
                  width={1200}
                  height={400}
                  className="object-cover opacity-20" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-white/10 backdrop-blur px-2 py-1 rounded-full text-xs">✨ Verified Artist</span>
                </div>
                <h1 className="text-6xl font-bold mb-4">Michel Joe</h1>
                <div className="flex items-center gap-1 text-sm mb-6">
                  <span>82,736,050</span>
                  <span className="text-zinc-300">monthly listeners</span>
                </div>
                <div className="flex items-center gap-4">
                  <Button className="bg-green-500 hover:bg-green-600">
                    <Play className="w-4 h-4 mr-2" />
                    PLAY
                  </Button>
                  <Button variant="outline" className="border-white">
                    FOLLOWING
                  </Button>
                </div>
              </div>

            </div>
  )
}

export default ArtistHeader