import { configureStore } from '@reduxjs/toolkit'
import { slideBar } from "../features/slideBar";

export const store = configureStore({
    reducer: {
        slideBar: slideBar.reducer
    },
})