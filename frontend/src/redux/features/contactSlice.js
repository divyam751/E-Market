import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API base URL
const API_BASE_URL = "http://localhost:3000/api/v1/message";

// AsyncThunk for user registration

export const sendMessage = createAsyncThunk(
  "message/create",
  async (messageData, { rejectWithValue }) => {
    console.log({ messageData });
    try {
      const response = await axios.post(`${API_BASE_URL}/create`, messageData);
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

// Initial state
const initialState = {
  message: null,
  status: null,
  statusCode: null,
  isLoading: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.isLoading = true;
        state.message = null;
        state.status = null;
        state.statusCode = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = action.payload.status;
        state.statusCode = action.payload.statusCode;
        state.message = action.payload.message;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload?.message;
        state.status = action.payload?.status;
        state.statusCode = action.payload?.statusCode;
      });
  },
});

// Export the logout action and reducer
export default contactSlice.reducer;
