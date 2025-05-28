import { createSlice } from "@reduxjs/toolkit";
// État initial
const initialState = {
  value: 0, // La valeur initiale du compteur
};
// Création du slice
const counterSlice = createSlice({
  name: "counter", // Nom du slice
  initialState, // État initial
  reducers: {
    // Reducer pour incrémenter
    increment: (state) => {
      state.value += 1;
    },
    // Reducer pour décrémenter
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
// Export des actions générées automatiquement
export const { increment, decrement } = counterSlice.actions;
// Export du reducer
export default counterSlice.reducer;
