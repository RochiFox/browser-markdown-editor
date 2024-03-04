import { createSlice } from "@reduxjs/toolkit";

const documentSlice = createSlice({
  name: "document",
  initialState: {
    selectedDocument: null,
  },
  reducers: {
    selectDocument: (state, action) => {
      state.selectedDocument = action.payload;
    },
  },
});

export const { selectDocument } = documentSlice.actions;
export default documentSlice.reducer;