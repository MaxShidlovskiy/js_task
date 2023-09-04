import { createSlice } from '@reduxjs/toolkit'

const counter1 = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: function (prevState) {
            return prevState + 1;
        }
    }
})

export default counter1.reducer
export const { increment } = counter1.actions