import { createSlice } from '@reduxjs/toolkit';
import { mockCities, mockStores } from './mock';

interface ICity {
  id: number;
  cityName: string;
  imageUrl: string;
}

interface IStore {
  id: number;
  city: string;
  storeName: string;
  rate: number;
  reviewCount: number;
  storeImage: string;
}

interface IDiscoverState {
  cities: ICity[];
  stores: IStore[];
}

const initialState: IDiscoverState = {
  cities: mockCities,
  stores: mockStores,
};

export const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {},
});

export const { reducer: discoverReducer } = discoverSlice;
