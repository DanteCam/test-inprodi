import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../Components/Reducers/NotesSlice";
import selectedReducer from "../Components/Reducers/SelectedSlice";
import authReducer from "../Components/Reducers/AuthSlice";

export const store = configureStore({
  reducer: {
    notesStorage: notesReducer,
    selectedStorage: selectedReducer,
    authStorage: authReducer,
  },
});
