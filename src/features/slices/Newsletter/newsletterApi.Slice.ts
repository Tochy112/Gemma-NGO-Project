import { Payment } from "@/components/Mail-list/Table/types";
import { apiSlice } from "../ApiSlice";

interface newsletterProp {
  email: string;
  name: string;
}

export const newsletterApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    PostNewsletter: builder.mutation<newsletterProp, newsletterProp>({
      query: (body) => ({
        url: "/email/send",
        method: "POST",
        body,
      }),
      invalidatesTags: ["MailList"],
    }),

    getMail: builder.query<Payment[], any>({
      query: () => ({
        url: "/email/get-mailing-list",
        method: "GET",
      }),
      providesTags: ["MailList"],
    }),
  }),
});

export const { usePostNewsletterMutation, useGetMailQuery } =
  newsletterApiSlice;

// ucheofor2015@gmail.com
