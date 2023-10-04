import { configureStore } from "@reduxjs/toolkit";
import app from "./reducers/app";

export const store = configureStore({
  reducer: {
    app,
  },
});
