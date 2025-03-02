import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"


import {
  Heart,
  MoreHorizontal,
} from "lucide-react"
import Image from "next/image"
import SongsList from '@/app/Data/SongsList'
import { useSelector } from 'react-redux'



const ScrollAreas = () => {
  const [favsongslist,setfavsonglist] = useState()
  //readux store call
  const favsong = useSelector((state)=>state.FavSongSlice.name)


  useEffect(()=>{
    const temlist = SongsList()
    const favlist = temlist.filter((ele)=> favsong.includes(ele.id))
    setfavsonglist(favlist)
  },[favsong])
  return (
    <div className="p-8 relative">
   
            <div className="mb-8 ">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">VibeShelf 🎧 – A shelf for your favorite vibes  </h2>
                <Button variant="link" className="text-green-500">
                  See All
                </Button>
              </div>
           
              <div className="grid grid-cols-6 gap-4">
             
              {  favsongslist && favsongslist.map((album, i) => (
                  <div key={i} className="space-y-2">
                    <div className="aspect-square relative bg-zinc-800 rounded-lg overflow-hidden">
                      <Image
                        src={album.cover}
                        alt={album.cover}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full" />
                           

                    </div>
             
               
                    <div className="text-sm font-medium">{album.name}</div>
                    <div className="text-xs text-zinc-400">
                      {album.year || 2010} • {album.type || "Sinhala"}
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