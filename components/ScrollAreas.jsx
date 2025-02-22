import React from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import {
  Heart,
  MoreHorizontal,
} from "lucide-react"
import Image from "next/image"


const ScrollAreas = () => {
  return (
    <div className="p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Popular Releases</h2>
                <Button variant="link" className="text-green-500">
                  See All
                </Button>
              </div>
              <div className="grid grid-cols-6 gap-4">
                {[
                  { title: "Abstract", year: "2024", type: "Album" },
                  { title: "Halloween", year: "2024", type: "Album" },
                  { title: "LoveLine", year: "2019", type: "Album" },
                  { title: "Equals", year: "2021", type: "Album" },
                  { title: "Rockstar", year: "Latest Releases", type: "Singles" },
                  { title: "Music", year: "2024", type: "Album" },
                ].map((album, i) => (
                  <div key={i} className="space-y-2">
                    <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden">
                      <Image
                        src="/Songimage/download (1).jpeg"
                        alt={album.title}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full" />
                    </div>
                    <div className="text-sm font-medium">{album.title}</div>
                    <div className="text-xs text-zinc-400">
                      {album.year} • {album.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Popular Song</h2>
              </div>
              <div className="space-y-2">
                {[
                  { title: "Abstract", plays: "1,952,015", duration: "3:36" },
                  { title: "Love Line", plays: "3,024,067", duration: "5:15" },
                  { title: "Abstract", plays: "1,952,015", duration: "3:36" },
                ].map((song, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/5">
                    <div className="w-6 text-center text-zinc-400">{i + 1}</div>
                    <div className="w-12 h-12 bg-zinc-800 rounded">
                      <Image
                        src="/Songimage/images.png"
                        alt={song.title}
                        width={48}
                        height={48}
                        className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{song.title}</div>
                      <div className="text-sm text-zinc-400">{song.plays}</div>
                    </div>
                    <div className="text-zinc-400">{song.duration}</div>
                    <Button variant="ghost" size="icon">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
  )
}

export default ScrollAreas