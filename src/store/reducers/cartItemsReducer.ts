import { CartSideBar } from '@/interfaces/cartSideBarInterfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { Items } from '@/interfaces/itemsInterfaces';

const initialState: CartSideBar = {
  isOpen: false,
  itemsInTheCart: [],
};

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    putItemsInTheCart(state, { payload }: PayloadAction<Items>) {
      const itemIndex = state.itemsInTheCart.findIndex((item) => item.id === payload.id)
      if (state.itemsInTheCart.some((item) => item.id === payload.id)) {
        state.itemsInTheCart[itemIndex].quantity! += 1
        return;
      }
      state.itemsInTheCart.push(payload);
    },
    removeItemsFromCart(state, { payload }: PayloadAction<number>) {
      const filteredItems = state.itemsInTheCart.filter(
        ({ id }) => id !== payload
      );
      state.itemsInTheCart = filteredItems;
    },
    openCart(state) {
      state.isOpen = true;
    },
    closeCart(state) {
      state.isOpen = false;
    },
    plusItemQuantity(state, { payload }: PayloadAction<number>) {
      const itemIndex = state.itemsInTheCart.findIndex(
        (item) => item.id === payload
      );
      state.itemsInTheCart[itemIndex].quantity! += 1;
    },
    minusItemQuantity(state, { payload }: PayloadAction<number>) {
      const itemIndex = state.itemsInTheCart.findIndex(
        (item) => item.id === payload
      );
      if (state.itemsInTheCart[itemIndex].quantity! - 1 === 0) {
        const filteredItems = state.itemsInTheCart.filter(
          ({ id }) => id !== payload
        );
        state.itemsInTheCart = filteredItems;
        return;
      }
      state.itemsInTheCart[itemIndex].quantity! -= 1!;
    },
  },
});

export const {
  putItemsInTheCart,
  removeItemsFromCart,
  openCart,
  closeCart,
  plusItemQuantity,
  minusItemQuantity,
} = cartItemsSlice.actions;

export const selectCartItems = (state: RootState) => state.cartItems;

export default cartItemsSlice.reducer;
