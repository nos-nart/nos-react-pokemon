import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { PokemonCardListReducer, PokemonCardListSlice } from '../slices/pokemon-card-list.slice';

const rootReducer = combineReducers({
  [PokemonCardListSlice.name]: PokemonCardListReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger]
})

const dispatch = store.dispatch;
export { store, dispatch };
