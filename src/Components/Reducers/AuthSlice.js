import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "auth",
  initialState: {
    userName: "",
    token: "",
    recoveryToken: "",
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRecoveryToken: (state, action) => {
      state.recoveryToken = action.payload;
    },
  },
});
export const { setUserName, setToken, setRecoveryToken } = slice.actions;
export const userName = (state) => state.authStorage.userName;
export const token = (state) => state.authStorage.token;
export const recoveryToken = (state) => state.authStorage.recoveryToken;

export default slice.reducer;
