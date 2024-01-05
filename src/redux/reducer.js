import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: 'student',
  initialState: {
    credentials: ""
  },
  reducers: {
    login: (state, action) => {
      state.credentials = action.payload;
    },
    logout: (state) => {
      state.credentials = "";
    }
  }
});

export const { login, logout } = studentSlice.actions;
export default studentSlice.reducer;
