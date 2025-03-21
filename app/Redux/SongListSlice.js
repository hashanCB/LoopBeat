'use cleint'

import { createSlice } from "@reduxjs/toolkit"
import SongsList from "../Data/SongsList"

const initialState = {
    SongsLists : SongsList()
}
export const SongListSlice = createSlice({
    name:"SongListSlice",
    initialState,
    reducers:{
        setReOrder:(state,action)=>{
            state.SongsLists = action.payload
        }
    }
})


export default SongListSlice.reducer
export const { setReOrder} = SongListSlice.actions