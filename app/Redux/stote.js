"use client"
import { FavSongSlice } from "./FavSongSlice";

const { configureStore } = require("@reduxjs/toolkit");



export const store = configureStore({
reducer:{
    FavSongSlice:FavSongSlice.reducer
}
})