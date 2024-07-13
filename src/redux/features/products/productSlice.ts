// src/redux/features/products/productsSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "@/types";

export interface ProductsState {
  products: TProduct[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    updateProductStock: (state, action) => {
      const product = state.products.find(
        (product) => product._id === action.payload.productId
      );
      if (product) {
        product.stockQuantity = product.stockQuantity - action.payload.quantity;
      }
    },
  },
});

export const { setProducts, updateProductStock } = productsSlice.actions;
export default productsSlice.reducer;
