import { createSlice } from "@reduxjs/toolkit";

const getInitialDarkModeState = () => {
  const storedDarkMode = localStorage.getItem("darkMode");
  if (storedDarkMode === null) {
    localStorage.setItem("darkMode", "true");
    return true;
  }
  return storedDarkMode === "true";
};

const initialState = {
  list: [],
  isDarkMode: getInitialDarkModeState(),
  loading: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("darkMode", state.isDarkMode.toString());
    },
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    loadMoreData: (state, action) => {
      const { images } = action.payload;
      state.list = [...state.list, ...images];
    },
  },
});

export const { toggleDarkMode, startLoading, stopLoading, loadMoreData } =
  appSlice.actions;

export default appSlice.reducer;
