import { configureStore } from '@reduxjs/toolkit';
import { airGradientApi } from './api';

export const store = configureStore({
  reducer: {
    [airGradientApi.reducerPath]: airGradientApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(airGradientApi.middleware),
});
