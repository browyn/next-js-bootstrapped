import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery(),
  keepUnusedDataFor: 180,
  endpoints: (builder) => ({}),
});
