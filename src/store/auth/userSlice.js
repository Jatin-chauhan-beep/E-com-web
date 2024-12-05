import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  _id: "",
  name: "",
  avatar: "",
  username: "",
  email: "",
  authority: [],
  entryPath: "",
};

export const userSlice = createSlice({
  name: "auth/user",
  initialState,
  reducers: {
    setUser: (_, action) => action.payload,
    userLoggedOut: () => initialState,
  },
});

export const { setUser, setUserConfigs } = userSlice.actions;

export default userSlice.reducer;
