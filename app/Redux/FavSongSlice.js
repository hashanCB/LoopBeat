"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:[1,2],
    NowPlay:false
}

export const FavSongSlice = createSlice({
    name:"Favsong",
    initialState,
    reducers:{
        addsong: (state,action) => {
                state.name.push(action.payload)
        },
        GoableSongPlay : (state,action) => {
                state.NowPlay = action.payload
        }
    }
})

export default  FavSongSlice.reducer
export const  { addsong,GoableSongPlay } = FavSongSlice.actions