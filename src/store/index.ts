import cartItemsSlice from './reducers/cartItemsReducer';
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './reducers/stockItemsReducer';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    cartItems: cartItemsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
