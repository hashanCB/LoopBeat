"use client"

import ArtistHeader from "@/components/ArtistHeader"
import BottomPlayer from "@/components/BottomPlayer"
import ScrollAreas from "@/components/ScrollAreas"
import Topbar from "@/components/Topbar"
import { ScrollArea } from "@/components/ui/scroll-area"
import Flybird from '@/components/Model3d/Flybird'
import { useSelect } from "@react-three/drei"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import {AnimatePresence, motion} from 'framer-motion'
export default function MusicApp() {

   const GobleSongPlay = useSelector((state)=>state.FavSongSlice.NowPlay)

  return (
    (<div className="flex h-screen bg-black text-white">
    
      <div className="flex-1 flex flex-col overflow-hidden ">
        {/* Top Bar */}
        <Topbar/>

        <ScrollArea className="flex-1 ">
         <ScrollAreas/>
        </ScrollArea>
       
      </div>
  
   
      {/* Bottom Player */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 p-4">
        <BottomPlayer/>
    
      </div>
      <div className='absolute bottom-24 right-0   '>
               {GobleSongPlay &&   
             

                <motion.div
                    className="w-full"
                    initial={{ opacity: 0 }} // Initial state: invisible
                    animate={{ opacity: 1 }} // Animate to full opacity
                    exit={{ opacity: 0 }} // Fade out when removed
                    transition={{ duration: 2 }} // Transition duration
                  >
                    <Flybird isPlaying={true} className="w-full" />
                  </motion.div>
            
              
      
                }  
            
     
       </div> 
    </div>)
  );
}

