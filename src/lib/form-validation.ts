import { z, ZodType } from "zod";
import { RegisterFormData, LoginFormData } from "./types";

export const RegistrationSchema: ZodType<RegisterFormData> = z
  .object({
    fullName: z
      .string()
      .min(2, { message: "Name is required" })
      .max(50, { message: "Name is too long" }),
    email: z
      .string()
      .min(1, { message: "This isn't a valid email" })
      .email("This isn't a valid email"),
    password: z
      .string()
      .min(4, { message: "Please enter at least 4 characters" }),
    repeatPassword: z
      .string()
      .min(4, { message: "Please enter at least 4 characters" }),
    city: z.string().min(1, { message: "Please enter a city" }),
    country: z.string({ message: "Please select a country" }),
  })
  .superRefine(({ repeatPassword, password }, ctx) => {
    if (repeatPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords do not match",
        path: ["repeatPassword"],
      });
    }
  });

export const LoginSchema: ZodType<LoginFormData> = z.object({
  email: z
    .string()
    .min(1, { message: "You cannot leave this field empty" })
    .email("This isn't a valid email"),
  password: z.string().min(1, { message: "You cannot leave this field empty" }),
});
