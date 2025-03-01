'use client'
import React, { useEffect, useReducer, useRef, useState } from 'react'
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
  Play,
  VolumeX,
  
} from "lucide-react"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"
import ReactHowler from "react-howler";
import SongsList from '@/app/Data/SongsList'
import { useDispatch, useSelector } from 'react-redux'
import { addsong } from '@/app/Redux/FavSongSlice'



const BottomPlayer = () => {
  const [play,setplay] = useState(false)
  const [ploop,setPloop] = useState(false)
  const [prandom , setPrandom] = useState(false)
  const Refsong = useRef()
  const RefVolums = useRef()
  const [duration,setduration] = useState(0)
  const [fulltimeducation , setfulltimeducation] = useState()
  const [remmeingtime , setremmeingtime] = useState(0)
  const SongsLists = SongsList()
  const [currentsoung , setCurrentsoung] = useState(0)
  const [volums,setVolums] = useState(0.5)
  const [ProcessBarvolums,setrocessBarVolums] = useState(0)
  const [mute , setMute] = useState(false)
  const [isfav,SetIsfav]= useState(false)

  //redux
  const favsong = useSelector((state)=>state.FavSongSlice.name)
  const dispath = useDispatch()
 

  const addSongSlice = () =>{
    const temp = favsong.includes(SongsLists[currentsoung].id)
    !temp ? dispath(addsong(SongsLists[currentsoung].id) ) : null
    
  }

  const isfavsong = () => {
   
    const temp = favsong.includes(SongsLists[currentsoung].id)
    console.log(favsong,"state",isfav,"currnt index",currentsoung , "temp ",temp)
    temp ? SetIsfav(true) : SetIsfav(false)
  }

  

  const dragsong_prograssbar = (val) =>{
    if (!Refsong.current) return; 
    const dragduration =  Refsong.current.duration()
    const dragtime =  (val/100)* dragduration
    Refsong.current.seek(dragtime)
    setduration(val)
   
  }

  const dragVloums_prograssbar = (val) =>{
    if (!Refsong.current) return; 

    const NewVloums =  val/100
    setrocessBarVolums(val)
    setVolums(NewVloums)
   
  }

  useEffect(()=>{

    let valums = (volums / 1) * 100
    setrocessBarVolums(valums)
    isfavsong()
    const time = setInterval(() => {
      if (!Refsong.current) return;
      const seek = Refsong.current.seek() || 0; // Get current time
      const durations = Refsong.current.duration() || 0; // Get current time
      const progressbar = (seek / durations ) * 100
      setduration(progressbar)
      setfulltimeducation(timecovnate(durations))
      setremmeingtime(timecovnate(seek))
     
    }, 500);

    return () => clearInterval(time)
  
  },[play])

  useEffect(() => {
    isfavsong();
  }, [currentsoung]); // Runs every time currentsoung changes
  
  const timecovnate = (time) =>{
    const min = (time/60).toFixed(2)
    const arr = min.split(".")
    const min2 = arr.join(":")
    return min2
  }


  const NowPlay = () => {
    setplay(!play)
   
  }
  const nextSong = () =>{
  
    let SongCount = SongsLists.length
    SongCount = SongCount - 1
    if ( currentsoung < SongCount){
      setCurrentsoung(currentsoung+1) 
    }else{ setCurrentsoung(0) }
    setplay(true)
   
  }

  const backSong = () =>{
    let SongCount = SongsLists.length
    SongCount = SongCount - 1
    if ( currentsoung > 0 ){
      
      setCurrentsoung(currentsoung-1)
    }else{
       
      setCurrentsoung(0)
    }
    setplay(true)
 
  }

  const nextRandomSong = () =>{
    let SongCount = SongsLists.length
    let randomvalues = Math.random() * (SongCount - 1)
     randomvalues = randomvalues.toFixed(0)
    while (randomvalues == currentsoung){
      randomvalues = Math.random() * (SongCount - 1)
      randomvalues = randomvalues.toFixed(0)
    }
 
    setCurrentsoung(randomvalues)
    setplay(true)
    //isfavsong()

 
 
  }

  return (
    <div className="max-w-screen-2xl mx-auto flex items-center gap-4">
    <div className="flex items-center gap-4 w-72">
      <div className="w-14 h-14 bg-zinc-800 rounded">
        <Image
          src={SongsLists[currentsoung].cover}
          alt="Now playing"
          width={56}
          height={56}
          className="object-cover" />
      </div>
      <div>
        <div className="font-medium">{SongsLists[currentsoung].name}</div>
        <div className="text-sm text-zinc-400">Alisha Joe</div>
      </div>
      <Button variant={isfav ? "ploop" : "ghost"} size="icon" onClick={()=>addSongSlice() }>
        <Heart className="w-4 h-4" />
      </Button>
    </div>

    <div className="flex-1 flex flex-col items-center gap-2">
      <div className="flex items-center gap-6">

        <Button variant={prandom ? "ploop" : "ghost"} size="icon" onClick={()=> setPrandom(!prandom)}>
          <Shuffle className="w-4 h-4" />
        </Button>

        {/* back song */}
        <Button variant="ghost" onClick={()=>backSong()} size="icon">
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* play button */}
       <div className="relative inline-block">
          {/* Button */}
          <Button
            size="icon"
            className="rounded-full  bg-white text-black hover:bg-white/90 hover:border-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600"
            onClick={() => NowPlay()}
          >
            {play ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>

          {/* Blue Wave Animation */}
          {play ? [] : <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Wave Circles */}
            <div className="absolute w-12 h-12 border-2 border-blue-500 rounded-full animate-ping opacity-75"></div>
            <div className="absolute w-16 h-16 border-2 border-blue-500 rounded-full animate-ping opacity-75 delay-200"></div>
            <div className="absolute w-20 h-20 border-2 border-blue-500 rounded-full animate-ping opacity-75 delay-400"></div>
          </div> }
          

        </div>

        {/* next song */}
       <Button variant="ghost" size="icon" onClick={()=>nextSong()}>
          <ChevronRight className="w-4 h-4" />
        </Button>
        
        {/* loop logo */}
        <Button variant={ploop ? "ploop" : "ghost"} size="icon" onClick={()=>setPloop(!ploop)} >
          <Repeat className="w-4 h-4" />
        </Button>

            {/* progress bar */}
      </div>
      <div className="flex items-center gap-2 w-full max-w-xl">
        <div className="text-xs text-zinc-400">{remmeingtime}</div>
        <Slider value={[duration]} isplay={play} max={100} step={4} className="w-full" onValueChange={(val) => dragsong_prograssbar(val)} />
        <div className="text-xs text-zinc-400">{fulltimeducation}</div>
      </div>
    </div>

    <div className="w-72 flex items-center justify-end gap-2">
        <button onClick={() => setMute(!mute)}>
           {mute ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

      <Slider value={[ProcessBarvolums]} max={100}  step={1} isplay={play} className="w-32" onValueChange={(val) => dragVloums_prograssbar(val)}  />
    </div>

    <ReactHowler 
    
        src={SongsLists[currentsoung].url}
        playing={play}
        loop={ploop}
        onEnd={prandom ? nextRandomSong : nextSong}
        volume={volums}
        ref={Refsong}
        mute={mute}
      />

  </div>
  )
}

export default BottomPlayer