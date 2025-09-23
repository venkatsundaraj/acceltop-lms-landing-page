import { z } from "zod";

export const emailValidator = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
});

export type EmailValidationSchema = z.infer<typeof emailValidator>;
