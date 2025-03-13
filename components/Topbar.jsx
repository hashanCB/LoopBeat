import React from 'react'
import {
    Bell,
    ChevronLeft,
    ChevronRight,
    Search,
  } from "lucide-react"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"



const Topbar = () => {
  return (
    <div className="flex items-center gap-4 p-4">
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" className="text-zinc-400">
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <div className="flex items-center gap-2 text-sm text-zinc-400">
        <span>Home</span>
        <ChevronRight className="w-4 h-4" />
        <span>Popular Artist</span>
      </div>
    </div>
    <div className="flex-1 relative">
      <Search className="w-4 h-4 absolute left-3 top-2.5 text-zinc-400" />
      <input
        type="text"
        placeholder="Search music, artist, albums..."
        className="w-full bg-zinc-900 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none" />
    </div>
    <Button variant="ghost" size="icon" className="text-zinc-400">
      <Bell className="w-5 h-5" />
    </Button>
    <div className="flex items-center gap-2">
      <div className='relative' >
      <Avatar className="w-8 h-8 ">
        <AvatarImage src={`/profile/hashan.jpg`} />
        <AvatarFallback>HC</AvatarFallback>
      
      </Avatar>
      <div className=' absolute top-0 right-0 rounded-full border-1 animate-ping border-white bg-green-500 p-1'></div>
      </div>
    
   
      <div className="text-sm">
        <div>Hashan Chanaka</div>

        <div className="text-xs text-zinc-400 ">Premium 👑</div>
      </div>
    </div>
  </div>
  )
}

export default Topbar