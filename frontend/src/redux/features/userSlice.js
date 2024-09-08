import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API base URL
const API_BASE_URL = "http://localhost:3000/api/v1/user";

// AsyncThunk for user registration
export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, userData);
      return response.data;
    } catch (error) {
      // Reject with proper error response data
      return rejectWithValue({
        message: error.response?.data?.message || "Something went wrong",
        status: "error",
        statusCode: error.response?.status || 500,
      });
    }
  }
);

// AsyncThunk for user login
export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, credentials);
      console.log(response.data.data.user);
      return response.data;
    } catch (error) {
      // Reject with proper error response data
      return rejectWithValue({
        message: error.response?.data?.message || "Invalid login credentials",
        status: "error",
        statusCode: error.response?.status || 401,
      });
    }
  }
);

// Initial state
const initialState = {
  user: null,
  message: null,
  status: null,
  statusCode: null,
  token: null,
  isLoading: false,
  isAuthenticated: false,
};

// Creating the userSlice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.message = null;
      state.status = null;
      state.statusCode = null;
      state.token = null;
      state.isLoading = false;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    // Handling registerUser
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.token = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data.user;
        state.status = action.payload.status;
        state.statusCode = action.payload.statusCode;
        state.isAuthenticated = false; // User will be authenticated only after login
        state.message = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload?.message || "Registration failed";
        state.status = action.payload?.status;
        state.statusCode = action.payload?.statusCode;
        state.isAuthenticated = false;
      });

    // Handling loginUser
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.token = null;
        state.status = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.token;
        state.status = action.payload.status;
        state.statusCode = action.payload.statusCode;
        state.isAuthenticated = true; // User is authenticated on success
        state.message = action.payload.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.message = action.payload?.message || "Login failed";
        state.status = action.payload?.status;
        state.statusCode = action.payload?.statusCode;
        state.isAuthenticated = false;
      });
  },
});

// Export the logout action and reducer
export const { logout } = userSlice.actions;
export default userSlice.reducer;
