import { createSlice } from "@reduxjs/toolkit";

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
      state.user = { name, email, password, isPremium: false }; // default false
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
    activatePremium: (state) => {
      if (state.user) {
        state.user.isPremium = true;
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
    syncPremiumFromStorage: (state) => {
      const stored = JSON.parse(localStorage.getItem("user"));
      if (stored) {
        state.user = stored;
      }
    },
  },
});

export const { signup, login, logout, activatePremium, syncPremiumFromStorage } =
  authSlice.actions;
export default authSlice.reducer;
