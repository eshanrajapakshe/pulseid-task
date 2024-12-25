import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IOffersData } from '../../types/offers';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const offerApi = createApi({
  reducerPath: 'offerApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getOffers: builder.query<IOffersData, void>({
      query: () => '/offer',
    }),
  }),
});

export const { useGetOffersQuery } = offerApi;
