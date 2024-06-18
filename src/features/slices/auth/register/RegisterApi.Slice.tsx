import { apiSlice } from "../../ApiSlice";

interface registerationProp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const authRegisterApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    RegisterUser: builder.mutation<registerationProp, registerationProp>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = authRegisterApiSlice;
