import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("product/getProduct", async () => {
  const response = await fetch("http://localhost:3001/products");
  const productData = await response.json();
  // console.log("getProducts called");
  return productData;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    apiData: [],
    filteredProducts: [],
    selectedProduct: [],
    cart: [],
    wishlist: [],
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
      // console.log("setCustomFilter called here", payload);
      state.filteredProducts = [];
      for (let query in payload) {
        // console.log("query: ", query.toLowerCase());
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
    sortByQuery: (state, { payload }) => {
      switch (payload) {
        case "HighToLow":
          state.filteredProducts = (
            state.filteredProducts.length !== 0
              ? [...state.filteredProducts]
              : [...state.apiData]
          ).sort((a, b) => b.price - a.price);
          break;
        case "LowToHigh":
          state.filteredProducts = (
            state.filteredProducts.length !== 0
              ? [...state.filteredProducts]
              : [...state.apiData]
          ).sort((a, b) => a.price - b.price);
          break;
        case "Recommended":
          state.filteredProducts =
            state.filteredProducts.length !== 0
              ? [...state.filteredProducts]
              : [...state.apiData];
          break;
      }
    },
    productQuery: (state, { payload }) => {
      state.selectedProduct = { ...payload };
    },

    addToCart: (state, { payload }) => {
      const existingItem = state.cart.find((item) => item.id === payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        payload = { ...payload, quantity: 1 };
        state.cart = [...state.cart, { ...payload }];
      }
    },
    addToWishlist: (state, { payload }) => {
      const existingIndex = state.wishlist.findIndex(
        (item) => item.id === payload.id
      );

      if (existingIndex === -1) {
        state.wishlist = [...state.wishlist, { ...payload }];
      } else {
        state.wishlist.splice(existingIndex, 1);
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

export const {
  searchQuery,
  setCustomFilter,
  sortByQuery,
  productQuery,
  addToCart,
  addToWishlist,
} = productSlice.actions;
export default productSlice.reducer;
