import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("product/getProduct", async () => {
  const response = await fetch("http://localhost:3001/products");
  const productData = await response.json();
  return productData;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    apiData: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.apiData = payload;
    });
    builder.addCase(getProducts.rejected, (state, error) => {
      state.loading = true;
      console.log(error);
    });
  },
});

export default productSlice.reducer;
