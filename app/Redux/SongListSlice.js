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

    }
})


export default SongListSlice.reducer
//export const {} = SongListSlice.actions