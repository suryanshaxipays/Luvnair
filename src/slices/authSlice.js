import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage
const storedUser = JSON.parse(localStorage.getItem("user"));
const storedAuth = JSON.parse(localStorage.getItem("isAuthenticated"));

const initialState = {
  user: storedUser || null,
  isAuthenticated: storedAuth || false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const { name, email, password } = action.payload;

      // Save user to storage
      state.user = { name, email, password };
      state.isAuthenticated = true;
      state.error = null;

      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("isAuthenticated", "true");
    },

    login: (state, action) => {
      const { email, password } = action.payload;
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (!savedUser) {
        state.error = "No user found. Please sign up first.";
        return;
      }

      if (savedUser.email === email && savedUser.password === password) {
        state.user = savedUser;
        state.isAuthenticated = true;
        state.error = null;
        localStorage.setItem("isAuthenticated", "true");
      } else {
        state.error = "Invalid email or password.";
      }
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;

      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
