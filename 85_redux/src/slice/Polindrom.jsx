import { createSlice } from "@reduxjs/toolkit";

const polindrom = createSlice({
    name: 'polindrom',
    initialState: {
        input: "",
        result: false
    },
    reducers: {
        fillInput: function (state, data) {
            return {
                ...state,
                input: data.payload
            }
        },
        isPolindrom: function (state) {
            if (state.input == state.input.split(``).reverse().join(``)) {
                return {
                    ...state,
                    result: true
                }
            } else {
                return {
                    ...state,
                    result: false
                }
            }
        }
    }
})

export default polindrom.reducer
export const { fillInput, isPolindrom } = polindrom.actions