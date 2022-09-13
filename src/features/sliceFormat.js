import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const SAMPLE_API_CALL = createAsyncThunk("demo/getPosts", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const DemoSlice = createSlice({
  name: "Demo",
  initialState: {
    value: null,
    status: "idle", // idle, loading, success, failed
  },
  reducers: {
    reset: (state) => {
      state.value = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SAMPLE_API_CALL.pending, (state) => {
        state.status = "loading";
      })
      .addCase(SAMPLE_API_CALL.fulfilled, (state, action) => {
        state.status = "success";
        state.value = action.payload;
      })
      .addCase(SAMPLE_API_CALL.rejected, (state) => {
        state.status = "failed";
        state.value = null;
      });
  },
});

export const { reset } = DemoSlice.actions;

export default DemoSlice;
