import { z } from "zod";
export const CreateUserSchema = z.object({
    clerkId: z.string({
      invalid_type_error: "Invalid Clerk ID",
    }),
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
  username: z
    .string({
      invalid_type_error: "Invalid UserName",
    })
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .max(20, {
      message: "Name must be at most 20 characters long",
    }),
firstName: z.string({
    invalid_type_error: "Invalid First Name",
    }),
lastName: z.string({
    invalid_type_error: "Invalid Last Name",
    }),

photo: z.string({
    invalid_type_error: "Invalid Photo",
    }).optional(),
});

//  export const UpdateUserSchema = z.object({
//     email: z.string({
//         invalid_type_error: 'Invalid Email',
//         }).optional(),
//     username: z.string({
//         invalid_type_error: 'Invalid UserName',
//         }).optional().min(3, {
//         message: 'Name must be at least 3 characters long',
//     }),
//     password: z.string({
//         invalid_type_error: 'Invalid Password',
//         }).optional().min(8, {
//         message: 'Password must be at least 8 characters long',
//     }),
//     id: z.string({
//         invalid_type_error: 'Invalid User ID',
//         }),
//     isAdmin: z.boolean({
//         invalid_type_error: 'Invalid User ID',
//         }).optional(),
//     isActive: z.boolean({
//         invalid_type_error: 'Invalid User ID',
//         }).optional(),
//     isVerified: z.boolean({
//         invalid_type_error: 'Invalid User ID',
//         }).optional(),
//     isDeleted: z.boolean({
//         invalid_type_error: 'Invalid User ID',
//         }).optional(),
//     createdAt: z.date({
//         invalid_type_error: 'Invalid User ID',
//         }).optional(),
//     updatedAt: z.date({
//         invalid_type_error: 'Invalid User ID',
//         }).optional(),
//     deletedAt: z.date({
//         invalid_type_error: 'Invalid User ID',
//         }).optional(),
//     })

export type CreateUserParams = z.infer<typeof CreateUserSchema>;
// export type UpdateUserParams = z.infer<typeof UpdateUserSchema>
