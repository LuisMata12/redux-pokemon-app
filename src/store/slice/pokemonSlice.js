import { createSlice } from '@reduxjs/toolkit'


export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState:{
    result:[],
    isLoading:'true',
  },
  reducers: {
    pokemonsPetitionS: (state,action) => {
      state.result= action.payload;
    },
    loadingPetition: (state) => {
      state.isLoading = 'true'
    },
    complitPetition: (state) => {
        state.isLoading = 'false'
    },
  },
})

// Action creators are generated for each case reducer function
export const { pokemonsPetitionS, loadingPetition, complitPetition } = pokemonSlice.actions