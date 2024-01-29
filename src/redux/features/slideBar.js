import { createSlice } from '@reduxjs/toolkit'

export const slideBar = createSlice({
    name: 'slideBar',
    initialState: { slide: false },
    reducers: {
        slide: (state, action) => {
            state.slide = state.slide ? false : true
        }
    }
})
export const { slide } = slideBar.actions