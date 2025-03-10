'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    songname : "",
    currentsoung: 0,
    IsPlay:false
}
export const CurrentSongSlice = createSlice({
    name:"goablesong",
    initialState,
    reducers:{
        NowPlaying:(state,action)=>{
            state.songname = action.payload
        },
        addcurrentsoung :(state,action) =>{
                state.currentsoung = state.currentsoung +1 
        },
        removecurrentsoung :(state,action) =>{
            state.currentsoung = state.currentsoung - 1
         },
        resetcurrentsoung : (state,action)=>{
                state.currentsoung = 0
        },
        setcurrentsoungslice : (state,action) =>{
            state.currentsoung = action.payload
        },
        setIsPlay:(state,action) =>{
            state.IsPlay = !state.IsPlay 
        },
        setIsPlayTrueFalse:(state,action) =>{
            state.IsPlay =  action.payload 
        }
    }
})

export default CurrentSongSlice.reducer
export const { setIsPlayTrueFalse ,NowPlaying,addcurrentsoung , resetcurrentsoung , removecurrentsoung , setcurrentsoungslice, setIsPlay } = CurrentSongSlice.actions