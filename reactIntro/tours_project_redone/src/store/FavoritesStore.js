import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name:'favorites',
    initialState:{
        favorites: []
    },
    reducers:{
        addToFavorites(state, action){
            state.favorites = state.favorites.concat(action.payload)
        },
        removeFromFavorites(state,action){
            state.favorites = state.favorites.filter((favs) => favs.id !== action.payload)
        }
    }
})

export const favoritesSliceActions = favoritesSlice.actions

export default favoritesSlice.reducer