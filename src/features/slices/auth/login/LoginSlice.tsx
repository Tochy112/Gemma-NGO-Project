import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface loginSliceProp {
  user: string | null;
  access_token: string | null;
}

const initialState: loginSliceProp = {
  user: null,
  access_token: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<any>) => {
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
    },
    logOut: (state) => {
      state.user = null;
      state.access_token = null;
    },
  },
});
export const { setCredentials, logOut } = loginSlice.actions;

export default loginSlice.reducer;

export const selectCurrentUser = (state: any) => state.login.user;

export const selectCurrentToken = (state: any) => state.login.access_token;
