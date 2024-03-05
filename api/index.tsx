import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { TOKEN } from '../constants';
import {
  IGetLocationCurrentMeasuresRequest,
  IGetLocationCurrentMeasuresResponse,
} from './models';

export const airGradientApi = createApi({
  reducerPath: 'airGradient',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.airgradient.com/public/api/v1/',
  }),
  endpoints: (builder) => ({
    getLocationCurrentMeasures: builder.query<
      IGetLocationCurrentMeasuresResponse,
      IGetLocationCurrentMeasuresRequest
    >({
      query: ({ locationId }) =>
        `locations/${locationId}/measures/current?token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    }),
  }),
});
export const { useGetLocationCurrentMeasuresQuery } = airGradientApi;
