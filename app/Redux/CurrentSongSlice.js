'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    songname : ""
}
export const CurrentSongSlice = createSlice({
    name:"goablesong",
    initialState,
    reducers:{
        NowPlaying:(state,action)=>{
            state.songname = action.payload
        }
    }
})

export default CurrentSongSlice.reducer
export const { NowPlaying} = CurrentSongSlice.actions