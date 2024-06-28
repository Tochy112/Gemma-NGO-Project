import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://gemma-backend-k3rp.onrender.com/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.user?.access_token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const CustomBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status == 401) {
    window.location.href = "/auth/login";
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: CustomBaseQuery,
  tagTypes: ["MailList", "User"],
  endpoints: () => ({}),
});
