import { apiSlice } from "../../ApiSlice";

interface loginProp {
  email: string;
  password: string;
}

export const authLoginApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    LoginUser: builder.mutation<loginProp, loginProp>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authLoginApiSlice;
