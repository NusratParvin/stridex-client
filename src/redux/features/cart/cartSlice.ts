import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "@/types";

interface CartItem {
  productInfo: TProduct;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.productInfo._id === action.payload.productInfo._id
      );
      if (existingItem) {
        if (existingItem.quantity < action.payload.productInfo.stockQuantity) {
          existingItem.quantity++;
        }
      } else {
        state.items.push({
          productInfo: action.payload.productInfo,
          quantity: action.payload.quantity,
        });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.productInfo._id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.productInfo._id === action.payload.productId
      );
      if (
        item &&
        item.quantity + action.payload.quantity > 0 &&
        item.quantity + action.payload.quantity <=
          item.productInfo.stockQuantity
      ) {
        item.quantity += action.payload.quantity;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
