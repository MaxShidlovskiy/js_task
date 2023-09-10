import { createSlice } from '@reduxjs/toolkit';

const inputValue = createSlice({
    name: 'inputValue',
    initialState: "",
    reducers: {
        fillInput: function (state, data) {
            return data.payload
        }
    }
})

export default inputValue.reducer
export const { fillInput } = inputValue.actions