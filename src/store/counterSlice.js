import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageValue = () => {
  const localStorageValue = window.localStorage.getItem("counter-value");
  if (localStorageValue !== null) {
    const value = parseInt(localStorageValue);
    return value;
  }
  return 0;
};

const initialState = {
  value: getLocalStorageValue(),
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (currentState) => {
      return {
        ...currentState,
        value: currentState.value + 1,
      };
    },
    decrement: (currentState) => {
      return {
        ...currentState,
        value: currentState.value - 1,
      };
    },
    setCounter: (currentState, action) => {
      return {
        ...currentState,
        value: action.payload,
      };
    },
  },
});

export const { increment, decrement, setCounter } = counterSlice.actions;

export default counterSlice.reducer;
