import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: "card",
    initialState: [],
    reducers: {
        addCard: (state, action) => {
            state.card = [...state.card, action.payload];
        },
        removeCard: (state, action) => {
            state.card = state.card.filter((item) => item.id !== action.payload);
        }
    }
});

export const { addCard, removeCard } = cardSlice.actions;

export default cardSlice.reducer;