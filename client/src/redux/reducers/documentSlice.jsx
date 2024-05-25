import { createSlice } from "@reduxjs/toolkit";

const documentSlice = createSlice({
  name: "document",
  initialState: {
    selectedDocumentId: null,
  },
  reducers: {
    selectDocument: (state, action) => {
      state.selectedDocumentId = action.payload; 
    },
  },
});

export const { selectDocument } = documentSlice.actions;
export const selectDocumentId = (state) =>
  state.document.selectedDocumentId;
export default documentSlice.reducer;
