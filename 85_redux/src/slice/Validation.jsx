import { createSlice } from '@reduxjs/toolkit';

const validation = createSlice({
    name: `validation`,
    initialState: {
        input: ``,
        result: false
    },
    reducers: {
        fillInput: function (state, data) {
            return {
                ...state,
                input: data.payload
            }
        },
        isValid: function (state) {
            if (/^[a-z0-9]+@[a-z]+\.+[a-z]+$/gm.test(state.input)) {
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

export default validation.reducer
export const { fillInput, isValid } = validation.actions