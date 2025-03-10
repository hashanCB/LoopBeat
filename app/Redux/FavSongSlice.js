"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:[0,1],
    NowPlay:false
}

export const FavSongSlice = createSlice({
    name:"Favsong",
    initialState,
    reducers:{
        addsong: (state,action) => {
                state.name.push(action.payload)
        },
        removesong : (state,action) => {
                state.name = state.name.filter((ele,index)=> ele != action.payload)
        },
        GoableSongPlay : (state,action) => {
                state.NowPlay = action.payload
        }
    }
})

export default  FavSongSlice.reducer
export const  { addsong,GoableSongPlay , removesong } = FavSongSlice.actions