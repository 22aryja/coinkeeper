import type { Transaction } from "@/types/transaction";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    transaction: Transaction | null;
}

const initialState: CounterState = {
    transaction: null,
};

const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        setTransaction: (state, action: PayloadAction<Transaction | null>) => {
            state.transaction = action.payload;
        },
    },
});

export const { setTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
