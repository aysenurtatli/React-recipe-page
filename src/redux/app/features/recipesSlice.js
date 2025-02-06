import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//FETCH
export const fetchRecipesAsync = createAsyncThunk('recipes/fetchRecipesAsync', async () => {
    return axios
        .get('https://dummyjson.com/recipes')
        .then(response => response.data.recipes)
        .catch((error) => {
            throw error;
        })
})

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipesAsync.fulfilled, (state, action) => {
                state.recipes = action.payload
            })
    }
})

export default recipesSlice.reducer