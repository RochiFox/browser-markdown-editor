import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeSlice";
import documentReducer from "./reducers/documentSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    document: documentReducer,
  },
});

export default store;
