"use client";

import { z } from "zod";

const RegisterFormSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First name is required" })
      .max(10, {
        message: "Too long, max of 10 characters",
      }),
    lastName: z.string().min(1, { message: "First name is required" }).max(10, {
      message: "Too long, max of 10 characters",
    }),
    email: z
      .string()
      .email({ message: "Email is invalid" })
      .min(1, { message: "Email is required" }),
    password: z
      .string()
      .min(6, { message: "Password must be 6 chracters or more" })
      .max(15, { message: "Password too long" }),
    confirmPassword: z.string().min(0),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export default RegisterFormSchema;
