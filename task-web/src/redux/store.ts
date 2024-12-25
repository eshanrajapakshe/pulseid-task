import { configureStore } from '@reduxjs/toolkit';
import { offerApi } from './api/offerApi';
import { discoverReducer } from '../features/Home/redux/discoverSlice';

export const store = configureStore({
  reducer: {
    [offerApi.reducerPath]: offerApi.reducer,
    discover: discoverReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(offerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
