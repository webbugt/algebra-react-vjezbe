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
  lastChange: "none",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.lastChange = "increment";
    },
    decrement: (state) => {
      state.value -= 1;
      state.lastChange = "decrement";
    },
    setCounter: (state, action) => {
      const previousValue = state.value;
      const newValue = action.payload;
      state.lastChange = newValue < previousValue?"set lower":"set higher"
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setCounter } = counterSlice.actions;

export default counterSlice.reducer;
