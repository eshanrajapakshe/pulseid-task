import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IOffersData } from '../../types/offers';

// to be removed
import { mockOffers } from '../../features/Home/redux/mock';

export const offerApi = createApi({
  reducerPath: 'offerApi',
  //   baseQuery: fetchBaseQuery({
  //     baseUrl: process.env.REACT_APP_BASE_URL,
  //     prepareHeaders: (headers) => {
  //       headers.set(
  //         'x-api-key',
  //         '9a5d051cd43717f66a4c375e47ae5b86fcabc70a6eab8fa588a8a627944542716d73741433853995f85514a907b65f7710546a831144c95126f44815c014d012',
  //       );
  //       headers.set(
  //         'x-api-secret',
  //         '059813a8b9973dad7eaa5d9118f8a1ea2f2235abb7446dac7eba88a86d3b90b4b3841bf4df27303b5039f5ab3e670ec3494f50e6afb3e54c00ce106a89e38036',
  //       );
  //       return headers;
  //     },
  //   }),
  baseQuery: async () => {
    // Simulate an API response with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockOffers });
      }, 1500);
    });
  },
  endpoints: (builder) => ({
    getOffers: builder.query<IOffersData, void>({
      query: () => '/offer',
    }),
  }),
});

export const { useGetOffersQuery } = offerApi;
