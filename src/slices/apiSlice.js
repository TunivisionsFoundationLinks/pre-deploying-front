import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });
const USER_URL = process.env.USER_URL;

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    GETUSERS: builder.mutation({
      query: (data) => ({
        url:
          `https://tlinkbackendserver.onrender.com/user/${data.id}` ||
          `${USER_URL}/user/${data.id}`,
        method: "GET",
      }),
    }),
  }),
});
