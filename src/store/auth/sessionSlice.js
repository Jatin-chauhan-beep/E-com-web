import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: "auth/session",
  initialState: {
    token: "",
    signedIn: false,
    signInRequest: false,
    passwordDialog: false,
  },
  reducers: {
    onSignInRequest: (state, action) => {
      state.signInRequest = action.payload;
    },
    onSignInSuccess: (state, action) => {
      state.signedIn = true;
      state.token = action.payload;
    },
    onSignOutSuccess: (state) => {
      state.signedIn = false;
      state.token = "";
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    togglePasswordDialog: (state, action) => {
      state.passwordDialog = action.payload;
    },
  },
});

export const {
  onSignInSuccess,
  onSignOutSuccess,
  setToken,
  togglePasswordDialog,
  onSignInRequest,
} = sessionSlice.actions;

export default sessionSlice.reducer;
