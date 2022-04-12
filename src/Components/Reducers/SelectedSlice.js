import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "selected",
  initialState: {
    openModal: false,
    selectedNote: {},
  },
  reducers: {
    setSelected: (state, action) => {
      state.selectedNote = action.payload;
    },
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
  },
});
export const { setSelected, setOpenModal } = slice.actions;
export const selectedNote = (state) => state.selectedStorage.selectedNote;
export const selectOpenModal = (state) => state.selectedStorage.openModal;

export default slice.reducer;
