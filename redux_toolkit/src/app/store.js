import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// Configuration du store
export const store = configureStore({
 reducer: {
 counter: counterReducer, // Ajoutez le reducer du compteur
 },
});