import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IOffersData } from '../../types/offers';

export const offerApi = createApi({
  reducerPath: 'offerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getOffers: builder.query<IOffersData, void>({
      query: () => '/offer',
    }),
  }),
});

export const { useGetOffersQuery } = offerApi;
