import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  Items,
  ItemsApiResponse,
  ItemsInitialState,
  ItemsPayload,
} from '../../interfaces/items';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

const baseEndpoint = 'https://mks-challenge-api-frontend.herokuapp.com';

export const fetchItems = createAsyncThunk(
  'items/fetch',
  async ({ page, rows, sortBy, orderBy }: ItemsPayload) => {
    const endpoint = `/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;
    const fullEndpoint = `${baseEndpoint}${endpoint}`;

    const allItems = (await fetch(fullEndpoint).then((response) =>
      response.json()
    )) as ItemsApiResponse;
    return allItems.products;
  }
);

const initialState: ItemsInitialState = {
  stockItems: [],
  itemsInTheCart: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    putItemsInTheCart(state, { payload }: PayloadAction<number>) {
      const item = state.stockItems.find(({ id }) => id === payload) as Items;
      state.itemsInTheCart.push(item);
    },
    removeItemsFromCart(state, { payload }: PayloadAction<number>) {
      const filteredItems = state.itemsInTheCart.filter(
        ({ id }) => id !== payload
      );
      state.itemsInTheCart = filteredItems;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.stockItems = action.payload;
    });
  },
});

export const { putItemsInTheCart, removeItemsFromCart } = itemsSlice.actions;

export const selectItems = (state: RootState) => state.items;

export default itemsSlice.reducer;
