import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./exampleSlice/exampleSlice";
import transactionReducer from "./transactionSlice/transactionSlice";

export const store = configureStore({
    reducer: {
        example: exampleReducer,
        transaction: transactionReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
