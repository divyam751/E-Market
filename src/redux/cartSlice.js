import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getcartProducts = createAsyncThunk(
  "product/getCartProduct",
  async () => {
    const response = await fetch("http://localhost:3001/cart");
    const productcartData = await response.json();
    return productcartData;
  }
);

const cartSlice = createSlice({
  name: "cartProducts",
  initialState: {
    cartData: [],
    loading: false,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartData.map((item) => {
        if (item.id === payload.id) {
          item.quantity += 1;
          return state.cartData;
        }
      });
      return state.cartData.push(payload);
    },
    deleteFromCart: (state, { payload }) => {
      return (state.cartData = state.cartData.filter((item) => {
        return item.id !== payload;
      }));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getcartProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getcartProducts.fulfilled, (state, { payload }) => {
      state.loading = true;
      state.cartData = payload;
    });
    builder.addCase(getcartProducts.rejected, (state, error) => {
      state.loading = true;
      console.log(error);
    });
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
