import { createSlice } from "@reduxjs/toolkit";

const display = createSlice({
    name: `displayText`,
    initialState: {
        flag: false,
        result: ``
    },
    reducers: {
        showText: function () {
            return {
                flag: true,
                result: `hi`
            }
        },
        hideText: function () {
            return {
                flag: false,
                result: ``
            }
        }

    }
})

export default display.reducer
export const { showText, hideText } = display.actions