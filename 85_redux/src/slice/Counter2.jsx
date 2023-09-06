import { createSlice } from "@reduxjs/toolkit";

const counter2 = createSlice({
    name: "counter2",
    initialState: 0,
    reducers: {
        increment: function (prevState) {
            return prevState + 1;
        },
        decrement: function (prevState) {
            return prevState - 1;

        }
    }
})

export const { increment, decrement } = counter2.actions;
export default counter2.reducer