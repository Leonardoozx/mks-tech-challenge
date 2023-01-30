import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ItemsApiResponse,
  ItemsInitialState,
  ItemsPayload,
} from '../../interfaces/itemsInterfaces';
import { createSlice } from '@reduxjs/toolkit';
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
  items: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      const mapedItems = action.payload.map((item) => ({ ...item, quantity: 1 }))  
      state.items = mapedItems;
    });
  },
});

export const selectItems = (state: RootState) => state.items;

export default itemsSlice.reducer;
