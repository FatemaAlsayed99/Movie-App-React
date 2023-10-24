import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Instance from "../../../inctances/inctance";

export const moviesAction=createAsyncThunk('movies/getAll', async ()=>{
    const response = await Instance.get(
        `/movie/popular?api_key=22ee4f53b871bd32bc50a7322350a8f3`
      );  
        // console.log(response)
    return response.data.results
})
const moviesSlice=createSlice({
    name: 'Movies',
    initialState: {movies:[]},
    extraReducers: (builder)=>{
        builder.addCase(moviesAction.fulfilled,(state,action)=>{
            state.movies=action.payload
        })
    }
})

export default moviesSlice.reducer