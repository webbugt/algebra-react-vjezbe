import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value: 1,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (currentState) => {
            return {
                ...currentState,
                value: currentState.value + 1
            }
        },
        decrement: (currentState) => {
            return {
                ...currentState,
                value: currentState.value - 1
            }
        },
    }
})

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer