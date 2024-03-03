import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("product/getProduct", async () => {
  const response = await fetch("http://localhost:3001/products");
  const productData = await response.json();
  console.log("getProducts called");
  return productData;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    apiData: [],
    filteredProducts: [],
    loading: false,
  },
  reducers: {
    searchQuery: (state, { payload }) => {
      const query = payload.toLowerCase();
      state.filteredProducts = state.apiData.filter(
        (item) =>
          item.brand.toLowerCase().includes(query) ||
          item.title.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    },
    setCustomFilter: (state, { payload }) => {
      console.log("setCustomFilter called here", payload);
      state.filteredProducts = []; // Reset the filteredProducts array
      for (let query in payload) {
        console.log("query: ", query.toLowerCase());
        if (payload[query]) {
          const data = state.apiData.filter(
            (item) =>
              item.brand.toLowerCase().includes(query.toLowerCase()) ||
              item.category.toLowerCase().includes(query.toLowerCase()) ||
              item.title.toLowerCase().includes(query.toLowerCase()) ||
              item.description.toLowerCase().includes(query.toLowerCase())
          );
          state.filteredProducts = [...state.filteredProducts, ...data];
        }
      }
    },
  },

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

export const { searchQuery, setCustomFilter } = productSlice.actions;
export default productSlice.reducer;
