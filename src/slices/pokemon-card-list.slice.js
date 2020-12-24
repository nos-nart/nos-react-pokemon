import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// REF: https://redux-toolkit.js.org/api/createAsyncThunk#createasyncthunk

const initialState = {
  loading: false,
  data: [],
  message: '',
};

export const getPokemonCardList = createAsyncThunk(
  'PokemonList/getPokemonCardList',
  async (params, thunkAPI) => {
    const response = await axios.get(`https://api.pokemontcg.io/v1/sets`);
    console.log('response: ', response);
    return response.data.sets;
  }
);

export const PokemonCardListSlice = createSlice({
  name: 'PokemonCardList',
  initialState,
  reducers: {},
  extraReducers: {
    [getPokemonCardList.pending]: (state, action) => {
      state.loading = true;
    },
    [getPokemonCardList.fulfilled]: (state, action) => {
      console.log('action: ', action);
      state.loading = false;
      state.data = action.payload;
    }
  }
})

export const PokemonCardListReducer = PokemonCardListSlice.reducer;
