import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const exampleSlice = createSlice({
    name: "example",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export const { increment } = exampleSlice.actions;

export default exampleSlice.reducer;
