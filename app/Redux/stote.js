"use client"
import { CurrentSongSlice } from "./CurrentSongSlice";
import { FavSongSlice } from "./FavSongSlice";
import { SongListSlice } from "./SongListSlice";

const { configureStore } = require("@reduxjs/toolkit");



export const store = configureStore({
reducer:{
    FavSongSlice:FavSongSlice.reducer,
    CurrentSongSlice:CurrentSongSlice.reducer,
    SongListSlice:SongListSlice.reducer
}
})