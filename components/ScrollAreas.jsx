import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea , ScrollBar } from "@/components/ui/scroll-area"

import SongsList from '@/app/Data/SongsList'

import {
  Heart,
  MoreHorizontal,
} from "lucide-react"
import Image from "next/image"

import { useDispatch, useSelector } from 'react-redux'
import { setcurrentsoungslice, setIsPlay, setIsPlayTrueFalse } from '@/app/Redux/CurrentSongSlice'
import { addsong, GoableSongPlay, removesong } from '@/app/Redux/FavSongSlice'



const ScrollAreas = () => {
  const SongsLists = SongsList()
    const [SongListData,setSongListData] = useState(SongsList())
    const [favsongslist,setfavsonglist] = useState()
    const [isfav,SetIsfav]= useState(false)


  //readux store call
  const favsong = useSelector((state)=>state.FavSongSlice.name)
  const currentsoung = useSelector((state)=>state.CurrentSongSlice.currentsoung)  // get current play song id
  const NowPlaySong = useSelector((state)=>state.CurrentSongSlice.songname) 
  const Rdx_IsPlay = useSelector((state)=>state.CurrentSongSlice.IsPlay)  //main veriable contral  Contral Song play
  const dispath = useDispatch() // use for the set user seleceted song add to play

  //songlist get for DAta file
  const temlist = SongsList()

  //after render redux pass Favsong List and call this useEffeact and set values to favsongslist state
  useEffect(()=>{
    const favlist = SongListData.filter((ele)=> favsong.includes(ele.id))
    setfavsonglist(favlist)
  },[favsong])

  

  const userSelectSong = (id) =>{ //this funtion use for this use select song control
    dispath(GoableSongPlay(true))
    dispath(setcurrentsoungslice(id))
    dispath(setIsPlayTrueFalse(true))

     //use this favsonglist re-order current play come up 1st
       let currentplayindex = favsongslist.findIndex((value)=> value.id === id)
       let down_currentplayindex = SongListData.findIndex((value)=> value.id === id)

     
    
       if(currentplayindex !== -1){
         let currentplayvalues = favsongslist.find((value)=> value.id === id)
         let temparry = [...favsongslist]
         temparry.splice(currentplayindex,1)
         temparry.unshift(currentplayvalues)
         setfavsonglist(temparry)
        
       }


       if(down_currentplayindex !== -1){
        let down_currentplayindexvalues = SongListData.find((value)=> value.id === id)
        let temparry_Song = [...SongListData]
       
        temparry_Song.splice(down_currentplayindex,1)
   
        temparry_Song.unshift(down_currentplayindexvalues)
        setSongListData(temparry_Song)

      }
    
  }


    const addSongSlice = (e,songid) =>{
      e.stopPropagation(); 
      const temp = favsong.includes(songid)
     
      if (!temp ) { dispath(addsong(songid) ) }
      else { dispath( removesong(songid)) }
      SetIsfav(!isfav)
      
    }


  return (
    <div className="p-8 relative">
      
            <div className="mb-8  ">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">VibeShelf 🎧 – A shelf for your favorite vibes  </h2>
                <Button variant="link" className="text-green-500">
                  See All
                </Button>
              </div>
            
              <ScrollArea className="w-[1400px]">
                
         
              <div className="flex gap-4 rounded-lg  w-max ">
          
              {  favsongslist && favsongslist.map((album, i) => (
                  <div key={i} className="space-y-2 ">
                    <div  onClick={()=>userSelectSong(album.id)}  className=" cursor-pointer aspect-square relative bg-zinc-800 rounded-lg overflow-hidden w-[200px] h-[200px]">
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
              <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Popular Song</h2>
              </div>
              <div className="space-y-2 h-full pb-20">
                {SongListData.map((song,index)=>(
                      <div
                      key={index}
                      onClick={()=>userSelectSong(song.id)}
                      className={`flex items-center gap-4 p-2 rounded-lg hover:bg-white/5 ${NowPlaySong == song.id ? "bg-gradient-to-r from-blue-600/55  to-black-600 border-2 border-r-emerald-100" : null}`}>
                      <div className="w-6 text-center text-zinc-400">{index + 1}</div>
                      <div className="w-12 h-12 bg-zinc-800 rounded">
                        <Image
                          src={song.cover}
                          alt={song.name}
                          width={48}
                          height={48}
                          className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{song.name}</div>
                        <div className="text-sm text-zinc-400">{song.plays || "Song name"}</div>
                      </div>
                      
                      <div className="text-zinc-400">{song.duration || "4:00"}</div>
                      
                         
                          <Button onClick={(e)=>{
                                               
                            addSongSlice(e,song.id) }} variant={favsongslist && favsongslist.some((ele)=> ele.id === song.id)? "ploop" : "ghost"} size="icon">
  
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