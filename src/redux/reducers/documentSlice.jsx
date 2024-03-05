import { createSlice } from "@reduxjs/toolkit";
import data from "./../../data/data.json";

const documentSlice = createSlice({
  name: "document",
  initialState: {
    selectedDocument: data[0],
  },
  reducers: {
    selectDocument: (state, action) => {
      state.selectedDocument = action.payload;
    },
  },
});

export const { selectDocument } = documentSlice.actions;
export default documentSlice.reducer;