import { z } from "zod";

export const CreateUserSchema = z.object({
  clerkId: z.string({ invalid_type_error: "Invalid Clerk ID" }),
  email: z.string().email({ message: "Invalid email format" }),
  username: z
    .string({ invalid_type_error: "Invalid UserName" })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(20, { message: "Name must be at most 20 characters long" }),
  firstName: z.string({ invalid_type_error: "Invalid First Name" }),
  lastName: z.string({ invalid_type_error: "Invalid Last Name" }).nullable(),
  photo: z.string({ invalid_type_error: "Invalid Photo" }).nullable().optional(),
});

export type CreateUserParams = z.infer<typeof CreateUserSchema>;
