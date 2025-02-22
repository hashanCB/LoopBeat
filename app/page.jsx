"use client"

import ArtistHeader from "@/components/ArtistHeader"
import BottomPlayer from "@/components/BottomPlayer"
import ScrollAreas from "@/components/ScrollAreas"
import Topbar from "@/components/Topbar"
import { ScrollArea } from "@/components/ui/scroll-area"


export default function MusicApp() {
  return (
    (<div className="flex h-screen bg-black text-white">
    
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <Topbar/>

        <ScrollArea className="flex-1">
         <ScrollAreas/>
        </ScrollArea>
      </div>
     
      {/* Bottom Player */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 p-4">
        <BottomPlayer/>
      </div>
    </div>)
  );
}

