import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "main",
  initialState: {
    notes: [
      {
        id: 1,
        title: "¡Esta es una Nota!",
        body: "sunt blanditiis ullam debitis, porro quae error iusto? Aut assumenda nesciunt ullam aspernatur dolor eveniet. Voluptate, illo.",
      },
      {
        id: 2,
        title: "¡Esta es una Nota!",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quod voluptate quos totam sunt blanditiis ullam debitis, porro quae error iusto? Aut assumenda nesciunt ullam aspernatur dolor eveniet. Voluptate, illo.",
      },
      {
        id: 3,
        title: "¡Esta es una Nota!",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quod voluptate quos totam sunt blanditiis ullam debitis, porro quae error iusto? Aut assumenda nesciunt ullam aspernatur dolor eveniet. Voluptate, illo.",
      },
      {
        id: 4,
        title: "¡Esta es una Nota!",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur quod voluptate quos totam sunt blanditiis ullam debitis, porro quae error iusto? Aut assumenda nesciunt ullam aspernatur dolor eveniet. Voluptate, illo.",
      },
    ],
  },
  reducers: {
    initialNotes: (state, action) => {
      state.notes = action.payload;
    },
    storeNote: (state, action) => {
      state.notes.push(action.payload);
    },
    updateNote: (state, action) => {
      state.notes.forEach((note) => {
        if (note.id === action.payload.id) {
          note.body = action.payload.body;
          note.title = action.payload.title;
        }
      });
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((task) => task.id !== action.payload);
    },
  },
});

export const { initialnotes, storeNote, deleteNote, updateNote } =
  slice.actions;
export const notesSelector = (state) => state.notesStorage.notes;

export default slice.reducer;
